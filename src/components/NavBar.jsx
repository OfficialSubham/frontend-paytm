import React from "react";

const NavBar = ({name}) => {
  return (
    <div className="w-full bg-white h-auto flex justify-between px-3 py-4 fixed top-0 border-b-2 border-gray-400 shadow-md">
      <div className="font-extrabold text-xl">My Payment App</div>

      <div>
        Hello, {name}
        <span className="bg-gray-200 px-3 py-2 font-bold text-center ml-2 rounded-full">
          {name[0].toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
