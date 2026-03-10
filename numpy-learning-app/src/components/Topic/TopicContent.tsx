import React from 'react';
import { BookOpen, Code, Dumbbell } from 'lucide-react';
import type { Topic } from '../../types';
import { CodeExampleCard } from './CodeExampleCard';
import { ExerciseCard } from './ExerciseCard';

interface TopicContentProps {
  topic: Topic;
}

export const TopicContent: React.FC<TopicContentProps> = ({ topic }) => {
  return (
    <div className="space-y-8">
      <div className="border-b border-vscode-border pb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl font-bold text-vscode-muted">
            {String(topic.order).padStart(2, '0')}
          </span>
          <h1 className="text-3xl font-bold text-vscode-text">{topic.title}</h1>
        </div>
        <p className="text-vscode-muted">{topic.description}</p>
      </div>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen size={20} className="text-vscode-blue" />
          <h2 className="text-xl font-semibold text-vscode-text">知识点讲解</h2>
        </div>
        
        <div className="bg-vscode-sidebar rounded-lg border border-vscode-border p-6">
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: topic.content.explanation }}
          />
          
          {topic.content.keyPoints.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-vscode-yellow mb-3">要点总结:</h3>
              <ul className="space-y-2">
                {topic.content.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-vscode-text">
                    <span className="text-vscode-green mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {topic.examples.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Code size={20} className="text-vscode-green" />
            <h2 className="text-xl font-semibold text-vscode-text">代码示例</h2>
          </div>
          
          <div className="space-y-4">
            {topic.examples.map((example, index) => (
              <CodeExampleCard 
                key={example.id} 
                example={example} 
                index={index} 
              />
            ))}
          </div>
        </section>
      )}

      {topic.exercises.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Dumbbell size={20} className="text-vscode-orange" />
            <h2 className="text-xl font-semibold text-vscode-text">练习题</h2>
          </div>
          
          <div className="space-y-4">
            {topic.exercises.map((exercise, index) => (
              <ExerciseCard 
                key={exercise.id} 
                exercise={exercise} 
                index={index} 
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};