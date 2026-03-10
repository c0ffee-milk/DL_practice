import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';
import { usePyodide } from '../../hooks/usePyodide';
import type { ExecutionResult } from '../../types';
import { OutputPanel } from './OutputPanel';

interface CodeEditorProps {
  initialCode: string;
  expectedOutput?: string;
  height?: string;
  showExpectedOutput?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  expectedOutput,
  height = '300px',
  showExpectedOutput = false,
}) => {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isReady, isLoading, error, runPython } = usePyodide();

  const handleRun = async () => {
    if (!isReady || isRunning) return;
    
    setIsRunning(true);
    setResult(null);
    
    const executionResult = await runPython(code);
    setResult(executionResult);
    
    setIsRunning(false);
  };

  const handleReset = () => {
    setCode(initialCode);
    setResult(null);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-vscode-border bg-vscode-bg">
      <div className="flex items-center justify-between px-4 py-2 bg-vscode-sidebar border-b border-vscode-border">
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={!isReady || isRunning}
            className={`flex items-center gap-2 px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              isReady && !isRunning
                ? 'bg-vscode-green text-black hover:opacity-90'
                : 'bg-vscode-muted text-vscode-text cursor-not-allowed'
            }`}
          >
            <Play size={16} fill="currentColor" />
            {isRunning ? '运行中...' : isLoading ? '加载中...' : '运行'}
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-sm text-vscode-text hover:bg-vscode-hover transition-colors"
          >
            <RotateCcw size={14} />
            重置
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 rounded text-sm text-vscode-muted hover:text-vscode-text hover:bg-vscode-hover transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? '已复制' : '复制'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="border-r border-vscode-border">
          <Editor
            height={height}
            defaultLanguage="python"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16 },
              fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            }}
          />
        </div>

        <div className="bg-vscode-bg">
          <OutputPanel 
            result={result} 
            expectedOutput={showExpectedOutput ? expectedOutput : undefined}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};