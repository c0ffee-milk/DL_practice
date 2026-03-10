import React from 'react';
import { Terminal, AlertCircle, CheckCircle } from 'lucide-react';
import type { ExecutionResult } from '../../types';

interface OutputPanelProps {
  result: ExecutionResult | null;
  expectedOutput?: string;
  isLoading: boolean;
  error: string | null;
}

export const OutputPanel: React.FC<OutputPanelProps> = ({
  result,
  expectedOutput,
  isLoading,
  error: pyodideError,
}) => {
  if (isLoading) {
    return (
      <div className="h-full min-h-[200px] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-vscode-blue mx-auto mb-2"></div>
          <p className="text-vscode-muted text-sm">正在加载 Python 环境...</p>
        </div>
      </div>
    );
  }

  if (pyodideError) {
    return (
      <div className="h-full min-h-[200px] p-4">
        <div className="flex items-center gap-2 text-red-400 mb-2">
          <AlertCircle size={18} />
          <span className="font-medium">加载错误</span>
        </div>
        <pre className="text-sm text-red-300 whitespace-pre-wrap">{pyodideError}</pre>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2 bg-vscode-sidebar border-b border-vscode-border">
        <Terminal size={16} className="text-vscode-muted" />
        <span className="text-sm text-vscode-muted">输出</span>
      </div>

      <div className="flex-1 p-4 overflow-auto">
        {!result && (
          <p className="text-vscode-muted text-sm italic">点击"运行"按钮查看输出结果</p>
        )}

        {result && result.success && result.stdout && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-vscode-green mb-2">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">执行成功</span>
            </div>
            <pre className="text-sm text-vscode-text whitespace-pre-wrap font-mono">
              {result.stdout}
            </pre>
          </div>
        )}

        {result && !result.success && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-red-400 mb-2">
              <AlertCircle size={16} />
              <span className="text-sm font-medium">执行错误</span>
            </div>
            {result.error && (
              <pre className="text-sm text-red-300 whitespace-pre-wrap font-mono mb-2">
                {result.error}
              </pre>
            )}
            {result.stderr && (
              <pre className="text-sm text-orange-400 whitespace-pre-wrap font-mono">
                {result.stderr}
              </pre>
            )}
          </div>
        )}

        {expectedOutput && (
          <div className="mt-4 pt-4 border-t border-vscode-border">
            <p className="text-xs text-vscode-muted mb-2">预期输出:</p>
            <pre className="text-sm text-vscode-cyan whitespace-pre-wrap font-mono">
              {expectedOutput}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};