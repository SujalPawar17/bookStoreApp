import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl dark:text-white">
          We're delighted to have you <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-12 dark:text-gray-300">
          <h1><span className="text-green-500 text-2xl md:text-2xl dark:text-white ">Welcome to our premium book courses! To access it, 
            you must have to Login for extra benefits.</span></h1>
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 dark:bg-pink-700 dark:hover:bg-pink-500">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 custom-scrollbar">
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
