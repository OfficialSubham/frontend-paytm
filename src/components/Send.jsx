import React from "react";

const Send = () => {
  return (
    <div className="min-h-screen h-auto flex justify-center items-center">
      <div className="w-80 bg-white flex flex-col items-center rounded-md p-4">
        <h2 className="text-2xl font-bold mb-10">Send Money</h2>

        <div className="w-full font-bold flex mb-3">
          <span className="bg-green-400 px-4 py-2 h-full font-bold text-center mr-4 rounded-full text-white">
            A
          </span>
          <div>
            Friend's name
            <br />
            <span className="text-sm font-extralight text-gray-500">email</span>
          </div>
        </div>
          <div className="w-full">
            <input type="Number" className="outline-gray-400 outline w-full rounded-md px-2 h-8 mb-3" placeholder="Enter amount"/>
            <button className="bg-green-400 w-full h-8 rounded-md cursor-pointer">Initiate Transfer</button>
          </div>
      </div>
    </div>
  );
};

export default Send;
