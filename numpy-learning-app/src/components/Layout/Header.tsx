import React from 'react';
import { Github, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleTheme }) => {
  return (
    <header className="h-14 bg-vscode-bg border-b border-vscode-border flex items-center justify-between px-4 lg:pl-72">
      <div className="flex items-center gap-4">
        <h1 className="text-vscode-text font-semibold hidden sm:block">
          NumPy 交互式学习
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg text-vscode-muted hover:text-vscode-text hover:bg-vscode-hover transition-colors"
          title={isDarkMode ? '切换到亮色模式' : '切换到暗色模式'}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-vscode-muted hover:text-vscode-text hover:bg-vscode-hover transition-colors"
          title="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </header>
  );
};