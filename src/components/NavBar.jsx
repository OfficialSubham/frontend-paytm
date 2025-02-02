import React from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atom";

const NavBar = () => {
  const userInfoAtom = useRecoilValue(userAtom);
  console.log(userInfoAtom);
  
  return (
    Object.keys(userInfoAtom).length > 0 && (
      <div className="w-full bg-white h-auto flex justify-between px-3 py-4 fixed top-0 border-b-2 border-gray-400 shadow-md">
        <div className="font-extrabold text-xl">My Payment App</div>

        <div>
          Hello, {userInfoAtom.name}
          <span className="bg-gray-200 px-3 py-2 font-bold text-center ml-2 rounded-full">
            {userInfoAtom.name[0].toUpperCase()}
          </span>
        </div>
      </div>
    )
  );
};

export default NavBar;
