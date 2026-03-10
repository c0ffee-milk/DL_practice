import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import type { Topic } from '../../types';

interface SidebarProps {
  topics: Topic[];
  currentTopicId: string;
  onSelectTopic: (topicId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const categoryLabels: Record<string, string> = {
  basics: '基础入门',
  creation: '数组创建',
  indexing: '索引与操作',
  functions: '函数应用',
  advanced: '进阶主题',
  quiz: '测验',
};

export const Sidebar: React.FC<SidebarProps> = ({
  topics,
  currentTopicId,
  onSelectTopic,
  isOpen,
  onToggle,
}) => {
  const groupedTopics = topics.reduce((acc, topic) => {
    if (!acc[topic.category]) {
      acc[topic.category] = [];
    }
    acc[topic.category].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

  const categories = Object.keys(groupedTopics);

  return (
    <>
      <button
        onClick={onToggle}
        className={`fixed top-4 left-4 z-50 p-2 rounded-lg bg-vscode-blue text-white transition-all duration-300 lg:hidden ${
          isOpen ? 'left-[260px]' : 'left-4'
        }`}
      >
        <ChevronRight
          size={20}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-vscode-sidebar border-r border-vscode-border transform transition-transform duration-300 z-40 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 border-b border-vscode-border">
          <div className="flex items-center gap-2 text-vscode-text">
            <BookOpen size={24} className="text-vscode-green" />
            <span className="font-semibold text-lg">NumPy 教程</span>
          </div>
          <p className="text-xs text-vscode-muted mt-1">交互式学习平台</p>
        </div>

        <nav className="p-2">
          {categories.map((category) => (
            <div key={category} className="mb-4">
              <h3 className="px-3 py-2 text-xs font-semibold text-vscode-muted uppercase tracking-wider">
                {categoryLabels[category] || category}
              </h3>
              <ul className="space-y-1">
                {groupedTopics[category].map((topic) => (
                  <li key={topic.id}>
                    <button
                      onClick={() => onSelectTopic(topic.id)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        currentTopicId === topic.id
                          ? 'bg-vscode-active text-vscode-text'
                          : 'text-vscode-muted hover:bg-vscode-hover hover:text-vscode-text'
                      }`}
                    >
                      <span className="inline-block w-6 text-xs opacity-60">
                        {topic.order}
                      </span>
                      {topic.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};