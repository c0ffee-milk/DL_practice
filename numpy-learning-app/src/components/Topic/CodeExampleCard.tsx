import React from 'react';
import type { CodeExample } from '../../types';
import { CodeEditor } from '../Editor/CodeEditor';

interface CodeExampleCardProps {
  example: CodeExample;
  index: number;
}

export const CodeExampleCard: React.FC<CodeExampleCardProps> = ({ example, index }) => {
  return (
    <div className="bg-vscode-sidebar rounded-lg border border-vscode-border overflow-hidden">
      <div className="p-4 border-b border-vscode-border">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-vscode-purple text-white text-xs font-medium">
            {index + 1}
          </span>
          <h3 className="font-medium text-vscode-text">{example.title}</h3>
        </div>
        <p className="text-sm text-vscode-muted">{example.description}</p>
      </div>

      <div className="p-4">
        <CodeEditor
          initialCode={example.code}
          expectedOutput={example.expectedOutput}
          height="250px"
          showExpectedOutput={!!example.expectedOutput}
        />
      </div>
    </div>
  );
};