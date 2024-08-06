import { useState } from "react";

import styles from "./styles.module.css";

const QuizApp = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is 2+2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is 3+3?",
      options: ["5", "6", "7", "8"],
      answer: "6",
    },
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className={styles.container}>
      <h2>Quiz App</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p className={styles.questions}>
            {questions[currentQuestion].question}
          </p>
          {questions[currentQuestion].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <p className={styles.score}>Your score: {score}</p>
      )}
    </div>
  );
};
export default QuizApp;
