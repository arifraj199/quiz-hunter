import React from "react";
import { useState } from "react";

const QuizQuesOptions = ({ option, correctAnswer }) => {
    const [selectAnswer,setSelectAnswer] = useState('')
//   console.log(correctAnswer);
 const handleQuesOption = event =>{
    event.preventDefault();
    const selectOption = event.target.value;
    // console.log(selectOption);
    setSelectAnswer(selectOption);
 }
//  if(selectAnswer === option){
//     alert('answer is correct!');
//  }else{
//     alert('wrong answer');
//  }
  return (
    <div className="flex justify-center items-center">
        <div onClick={handleQuesOption}>
        <input  type="radio" name="option" value={option} />
        </div>
      
      <h1 className="ml-2">{option}</h1>
    </div>
  );
};

export default QuizQuesOptions;
