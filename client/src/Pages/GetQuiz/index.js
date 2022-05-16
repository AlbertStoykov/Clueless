const handleClickAnswer = (e) => {
  const question = response.results[questionIndex];
  if (e.target.textContent === question.correct_answer) {
    dispatch(handleScoreChange(score + 1));
  }

  if (questionIndex + 1 < response.results.length) {
    setQuestionIndex(questionIndex + 1);
  } else {
    history.push('/score');
  }
};
