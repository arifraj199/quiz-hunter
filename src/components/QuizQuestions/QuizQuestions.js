import React from "react";
import QuizQuesOptions from "../QuizQuesOptions/QuizQuesOptions";

const QuizQuestions = ({ quiz }) => {
  // console.log(quiz);
  const { question, correctAnswer, id, options } = quiz;
  return (
    <div>
      <div className="border-2  border-orange-500 rounded-md my-5 p-8 mx-4">
        <h1 className="text-blue-800 font-semibold text-xl">{question}</h1>
        <div className="grid grid-cols-2 mt-4">
          {options.map((option, idx) => (
            <QuizQuesOptions key={idx} option={option}></QuizQuesOptions>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
