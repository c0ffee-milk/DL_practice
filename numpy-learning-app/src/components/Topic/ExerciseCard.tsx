import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, CheckCircle } from 'lucide-react';
import type { Exercise } from '../../types';
import { CodeEditor } from '../Editor/CodeEditor';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, index }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);

  return (
    <div className="bg-vscode-sidebar rounded-lg border border-vscode-border overflow-hidden">
      <div className="p-4 border-b border-vscode-border">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-vscode-blue text-white text-xs font-medium">
            {index + 1}
          </span>
          <h3 className="font-medium text-vscode-text">{exercise.title}</h3>
        </div>
        <p className="text-sm text-vscode-muted">{exercise.instructions}</p>
      </div>

      <div className="p-4">
        <CodeEditor
          initialCode={exercise.starterCode}
          height="200px"
        />
      </div>

      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {exercise.hints.length > 0 && (
            <button
              onClick={() => setShowHints(!showHints)}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-vscode-yellow hover:bg-vscode-hover rounded transition-colors"
            >
              <Lightbulb size={14} />
              {showHints ? '隐藏提示' : '显示提示'}
              {showHints ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
          
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-1 px-3 py-1.5 text-sm text-vscode-green hover:bg-vscode-hover rounded transition-colors"
          >
            <CheckCircle size={14} />
            {showSolution ? '隐藏答案' : '查看答案'}
            {showSolution ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {showHints && exercise.hints.length > 0 && (
          <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-700/30 rounded-lg">
            <p className="text-xs text-vscode-yellow font-medium mb-2">提示:</p>
            <ul className="space-y-1">
              {exercise.hints.map((hint, i) => (
                <li key={i} className="text-sm text-vscode-text">
                  {i + 1}. {hint}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showSolution && (
          <div className="mt-3">
            <CodeEditor
              initialCode={exercise.solution}
              height="150px"
            />
          </div>
        )}
      </div>
    </div>
  );
};