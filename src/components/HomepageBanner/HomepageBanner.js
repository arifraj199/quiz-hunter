import React from "react";

const HomepageBanner = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://i.ibb.co/Kz1HVM3/q-hunter-f-op.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "80vh",
      }}
      className=""
    >
      <div className="pt-40 mr-16 text-right">
        <h1 className="text-5xl font-bold text-orange-700  ">
          Crack Your Quiz Exam!!
        </h1>
        <div className="w-2/5 text-left ml-auto mt-4">
          <p className="text-blue-900 font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            veniam nostrum animi itaque est vero repellat molestiae in iusto et?
          </p>
        </div>
        <div className="w-2/3 mr-auto ml-8 mt-4">
          <button className="capitalize text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-900 bg-orange-800">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
