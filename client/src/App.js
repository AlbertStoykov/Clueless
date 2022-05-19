import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  QuizSetup,
  Questions,
  FinalScore,
  NotFoundPage,
  LandingPage,
  GameRoom,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gameroom" element={<GameRoom />} />
      <Route path="/getquiz" element={<QuizSetup />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/score" element={<FinalScore />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
