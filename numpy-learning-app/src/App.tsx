import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { TopicContent } from './components/Topic/TopicContent';
import { topics, getTopicById, getFirstTopic } from './data';
import './styles/globals.css';

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? getTopicById(topicId) : undefined;
  
  if (!topic) {
    return <Navigate to={`/topic/${getFirstTopic().id}`} replace />;
  }
  
  return <TopicContent topic={topic} />;
};

const HomePage: React.FC = () => {
  const firstTopic = getFirstTopic();
  return <Navigate to={`/topic/${firstTopic.id}`} replace />;
};

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const [currentTopicId, setCurrentTopicId] = useState(getFirstTopic().id);

  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/\/topic\/(.+)/);
    if (match) {
      setCurrentTopicId(match[1]);
    }
  }, []);

  const handleSelectTopic = (topicId: string) => {
    setCurrentTopicId(topicId);
    navigate(`/topic/${topicId}`);
  };

  return (
    <MainLayout
      topics={topics}
      currentTopicId={currentTopicId}
      onSelectTopic={handleSelectTopic}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/:topicId" element={<TopicPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;