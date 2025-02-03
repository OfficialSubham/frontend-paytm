import React, { useEffect } from "react";
import { useRecoilState, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { userAtom } from "../store/atom";
import { userSelector } from "../store/selector";

const NavBar = () => {
  const [userInfoAtom, setUserInfoAtom] = useRecoilState(userAtom)
  const loadableUserSelector = useRecoilValueLoadable(userSelector)
    useEffect(() => {
      if(loadableUserSelector.state === "hasValue" && Object.keys(userInfoAtom).length === 0) {
        setUserInfoAtom(loadableUserSelector.contents)
      }
    }, [loadableUserSelector, userInfoAtom]);
  return (
    Object.keys(userInfoAtom).length > 0 && (
      <div className="w-full bg-white h-auto flex justify-between px-3 py-4 fixed top-0 border-b-2 border-gray-400 shadow-md">
        <div className="font-extrabold text-xl">My Payment App</div>

        <div className="flex items-center">
          <div className="hidden md:block">
          Hello, {userInfoAtom.name}
          </div>

          <span className="bg-gray-200 px-4 py-2 font-bold text-center ml-2 rounded-full">
            {userInfoAtom.name[0].toUpperCase()}
          </span>
        </div>
      </div>
    )
  );
};

export default NavBar;
