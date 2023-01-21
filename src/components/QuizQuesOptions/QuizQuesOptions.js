import React from "react";

const QuizQuesOptions = ({ option }) => {
  return (
    <div className="flex justify-center items-center">
      <input type="radio" name="option" value={option} />
      <h1 className="ml-2">{option}</h1>
    </div>
  );
};

export default QuizQuesOptions;
