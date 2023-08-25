import React from "react";
import { TbCopy } from "react-icons/tb";

const page = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="h-128 px-20 w-full flex-col mx-20 bg-slate-300 flex justify-center items-center rounded-lg">
          <span className="text-black font-bold text-2xl mb-10">
            URL SHORTENER
          </span>
          <div className="mx-2 my-2 flex flex-row w-full">
            <input
              type="text"
              placeholder="Paste URL here..."
              className="rounded-md p-2 w-full h-10"
            />
            <button className="p-2 ml-2 bg-yellow-500 text-black font-medium hover:bg-yellow-400 flex text-center items-center rounded-md">
              SHORT
            </button>
          </div>
          <input
            type="text"
            className="mx-2 relative my-2 rounded-md h-10 w-full"
          />
          <button className="relative top-5 left-0 text-black">
            {" "}
            {<TbCopy size={24} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
