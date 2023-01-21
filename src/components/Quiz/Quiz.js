import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "../QuizQuestions/QuizQuestions";

const Quiz = () => {
  const quizLoader = useLoaderData();
  // console.log(quiz.data.questions);
  const quizData = quizLoader.data.questions;
  console.log(quizData);
  return (
    <div className="grid grid-cols-3  gap-4 mt-8">
      <div className="grid col-span-2">
        <h2 className="text-2xl font-bold text-orange-700">Questions</h2>

        {quizData.map((quiz) => (
          <QuizQuestions key={quiz.id} quiz={quiz}></QuizQuestions>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-800">
          Questions Correction
        </h2>
      </div>
    </div>
  );
};

export default Quiz;
