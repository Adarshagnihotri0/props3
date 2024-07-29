import React from "react";

const Card = ({ raw, handleClick, index}) => {
  const { image, song, artist, added } = raw;

  return (
    <div className="w-60 bg-zinc-100 p-6 rounded-md gap-3 flex relative mt-10">
      <div className="w-20 h-20 bg-orange-500 flex rounded-md overflow-hidden ">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className=" text-black leading-none">
        <h1 className="text-xl font-semibold ">{song}</h1>
        <h5 className="text-xs font-semibold ">{artist}</h5>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`text-xs drop-shadow-xl rounded-full ${
          added === false ? "bg-orange-700" : "bg-green-600"
        } px-3 py-2 absolute bottom-0 translate-x-1/2 translate-y-1/2 hover:bg-blue-800 focus:outline-none  focus:ring-2 focus:ring-blue-700 focus:ring-opacity-100`}
        aria-label="Add To Favourite"
      >
        {added === false ? "Add To Favourite" : "Added"}
      </button>
    </div>
  );
};

export default Card;
