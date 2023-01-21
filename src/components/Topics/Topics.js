import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Topics = ({ topic,handleNavigate }) => {
  const { name, logo,id } = topic;
  return (
    <div className="border-2 rounded-lg border-orange-900 p-5">
      <img width="280" src={logo} alt="" />
      <div className="flex justify-between items-center mt-3">
        <h1 className="text-2xl text-blue-700 font-bold">{name}</h1>
        <button onClick={()=>handleNavigate(id)} className="text-xl bg-orange-800 flex items-center text-white px-3 rounded-md hover:bg-orange-900 py-1">
          Start Quiz
          <ArrowRightIcon className="h-4 w-4 ml-1 mt-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Topics;
