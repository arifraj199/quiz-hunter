import React, { useState } from "react";

const QuizQuestions = ({ quiz, setData }) => {
  const { question, correctAnswer, id, options } = quiz;

  const [selectAnswer, setSelectAnswer] = useState("");

  const [correction, setCorrection] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const handleQuesOption = (event) => {
    const selectOption = event.target.value;
    setSelectAnswer(selectOption);
  };

  const handleJustify = () => {
    if (selectAnswer === correctAnswer) {
      alert("Correct Answer!!");
      setCorrection(correction + 1);
    } else {
      alert("Wrong Answer!!");
      setWrongAnswer(correction + 1);
    }

    setData(correction + 1);
  };
  return (
    <div>
      <div className="border-2  border-orange-500 rounded-md my-5 p-8 mx-4">
        <h1 className="text-blue-800 font-semibold text-xl">{question}</h1>
        <div className="grid grid-cols-2 mt-4">
          {options.map((option) => (
            <div key={id}>
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
          ))}
        </div>
        <div className="">
          <button
            onClick={handleJustify}
            className="bg-orange-800 text-white py-1 px-6 rounded-md font-semibold mt-4"
          >
            Justify Answer
          </button>
        </div>
        <div>
          <p>Right Answer:{correction}</p>
          <p>Wrong Answer:{wrongAnswer}</p>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
