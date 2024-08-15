import React, { useState } from "react";
import "./Quiz.css"; // Ensure this path is correct

const Quiz = () => {
  // Sample quiz data
  const questions = [
    {
      questionText: "In which country are the world 10 coldest cities located?",
      options: ["United States", "Russia", "Sweden", "Canada"],
      correctAnswer: "Russia",
    },
    {
      questionText: "Which continent is home to the most countries?",
      options: ["Africa", "Asia", "Europe", "South America"],
      correctAnswer: "Africa",
    },
    {
      questionText: "Which is the smallest country in the world?",
      options: ["Monaco", "Liechtenstein", "San Marino", "Vatican City"],
      correctAnswer: "Vatican City",
    },
    {
      questionText: "Which country has the most islands?",
      options: ["Philippines", "Sweden", "Thailand", "Norway"],
      correctAnswer: "Sweden",
    },
    {
      questionText: "Which European city is famous for its canals?",
      options: ["Lisbon", "Amsterdam", "Venice", "Stockholm"],
      correctAnswer: "Venice",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedOption(option);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      }, 1000); // Delay to show feedback
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        {showScore ? (
          <div className="quiz-score">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <button className="restart-button" onClick={handleRestartQuiz}>
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="quiz-question">
              {questions[currentQuestion].questionText}
            </h2>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => {
                let buttonClass = "quiz-option-button";
                if (selectedOption) {
                  buttonClass +=
                    option === questions[currentQuestion].correctAnswer
                      ? " correct"
                      : " incorrect";
                }
                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerOptionClick(option)}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
