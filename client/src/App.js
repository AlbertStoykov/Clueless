import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizSetUp from './Pages/QuizSetUp';
import GetQuiz from './Pages/GetQuiz';
import FinalScore from './Pages/FinalScore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizSetUp />} />
      <Route path="/questions" element={<GetQuiz />} />
      <Route path="score" element={<FinalScore />} />
    </Routes>
  );
}

export default App;
