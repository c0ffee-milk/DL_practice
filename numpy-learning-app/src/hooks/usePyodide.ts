import { useState, useEffect, useCallback } from 'react';
import { loadPyodide, type PyodideInterface } from 'pyodide';
import type { PyodideState, ExecutionResult } from '../types';

let pyodideInstance: PyodideInterface | null = null;
let pyodideLoadingPromise: Promise<PyodideInterface> | null = null;
const PYODIDE_CDN_VERSION = '0.29.3';

export const usePyodide = () => {
  const [state, setState] = useState<PyodideState>({
    isLoading: true,
    isReady: false,
    error: null,
  });

  useEffect(() => {
    const initPyodide = async () => {
      if (pyodideInstance) {
        setState({ isLoading: false, isReady: true, error: null });
        return;
      }

      if (pyodideLoadingPromise) {
        try {
          await pyodideLoadingPromise;
          setState({ isLoading: false, isReady: true, error: null });
        } catch (error) {
          setState({ 
            isLoading: false, 
            isReady: false, 
            error: error instanceof Error ? error.message : 'Failed to load Pyodide'
          });
        }
        return;
      }

      pyodideLoadingPromise = loadPyodide({
        // Keep this aligned with `package.json` pyodide version to avoid runtime mismatch errors.
        indexURL: `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_CDN_VERSION}/full/`,
      });

      try {
        pyodideInstance = await pyodideLoadingPromise;
        await pyodideInstance.loadPackage('numpy');
        
        setState({ isLoading: false, isReady: true, error: null });
      } catch (error) {
        setState({ 
          isLoading: false, 
          isReady: false, 
          error: error instanceof Error ? error.message : 'Failed to initialize Pyodide'
        });
      }
    };

    initPyodide();
  }, []);

  const runPython = useCallback(async (code: string): Promise<ExecutionResult> => {
    if (!pyodideInstance) {
      return {
        stdout: '',
        stderr: '',
        success: false,
        error: 'Pyodide not initialized'
      };
    }

    let stdout = '';
    let stderr = '';

    try {
      pyodideInstance.setStdout({ batched: (text: string) => { stdout += text + '\n'; } });
      pyodideInstance.setStderr({ batched: (text: string) => { stderr += text + '\n'; } });

      await pyodideInstance.runPythonAsync(code);

      return {
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        success: true
      };
    } catch (error) {
      return {
        stdout: stdout.trim(),
        stderr: stderr.trim(),
        success: false,
        error: error instanceof Error ? error.message : 'Execution error'
      };
    }
  }, []);

  return { ...state, runPython };
};
