import React from 'react';
import { Route, Routes } from 'react-router-dom';
import QuizSetup from './Pages/QuizSetup';
// import GetQuiz from './Pages/GetQuiz';

import FinalScore from './Pages/FinalScore';
import Questions from './Pages/Questions';

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizSetup />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="score" element={<FinalScore />} />
    </Routes>
  );
}

export default App;
