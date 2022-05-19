import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  QuizSetup,
  Questions,
  FinalScore,
  NotFoundPage,
  LandingPage,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quizsetup" element={<QuizSetup />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/score" element={<FinalScore />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
