import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg border border-black bg-[#fff0e5]">
      <img
        className="w-full"
        src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">COURSE TITLE</div>
        <p className="text-gray-700 text-base">
          SUMMARY DESCRIPTION: Lorem ipsum dolor sit amet.
        </p>
      </div>
      
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-violet-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          CATEGORY
        </span>
        <span className="inline-block bg-violet-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #TAG
        </span>
      </div>
    </div>
  );
};

export default Card;
