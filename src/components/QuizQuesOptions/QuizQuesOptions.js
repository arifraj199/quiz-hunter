import React from "react";
import { useState } from "react";

const QuizQuesOptions = ({ option }) => {
  const [selectAnswer, setSelectAnswer] = useState("");
  // console.log(correctAnswer);
  const handleQuesOption = (event) => {
    
    const selectOption = event.target.value;
    // console.log(selectOption);
    setSelectAnswer(selectOption);
    
  };
  
  return (
    <div>
      <div className="flex justify-center items-center">
      <div>
        <input
          onChange={handleQuesOption}
          type="radio"
          name="quesOption"
          value={option}
        />
        <label className="ml-2">{option}</label>
      </div>
      
    </div>
    
    </div>
  );
};

export default QuizQuesOptions;

