import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import type { Topic } from '../../types';

interface MainLayoutProps {
  children: React.ReactNode;
  topics: Topic[];
  currentTopicId: string;
  onSelectTopic: (topicId: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  topics,
  currentTopicId,
  onSelectTopic,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-vscode-bg text-vscode-text">
        <Sidebar
          topics={topics}
          currentTopicId={currentTopicId}
          onSelectTopic={(topicId) => {
            onSelectTopic(topicId);
            setIsSidebarOpen(false);
          }}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />

        <main className="lg:pl-64 pt-14 min-h-screen">
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <div className="p-4 lg:p-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};