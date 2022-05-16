import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizSetup from './Pages/QuizSetup';
// import GetQuiz from './Pages/GetQuiz';
import FinalScore from './Pages/FinalScore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizSetup />} />
      <Route path="/questions" />
      <Route path="score" element={<FinalScore />} />
    </Routes>
  );
}

export default App;
