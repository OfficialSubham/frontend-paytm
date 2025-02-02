import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Users from "./Users";
import axios from "axios";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { allUsersAtom, userAtom } from "../store/atom";
import { allUsersSelector, userSelector } from "../store/selector";

const Dashboard = () => {
  const [users, setUsers] = useRecoilState(allUsersAtom);
  const lodableAllUsers = useRecoilValueLoadable(allUsersSelector)
  const userInfoAtom = useRecoilValue(userAtom)
  const [filterSearch, setFilterSearch] = useState("");
  const backendUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if(lodableAllUsers.state === "hasValue" && users.length === 0) {
      setUsers(lodableAllUsers.contents)
    }
  }, [lodableAllUsers, setUsers])

  return (
    lodableAllUsers.state === "hasValue" && (
      <>
      <NavBar/>
        <div className="mt-12 p-5">
          <div className="font-bold text-xl mb-5">
            Your Balanace : Rs. {userInfoAtom.balance}{" "}
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold">Users</h2>
            <div className="w-full flex gap-3 mb-4">
              <input
                type="text"
                className="px-3 rounded-md bg-white w-full"
                placeholder="Search users..."
              />
              <button className="px-3 py-2 bg-black text-white font-bold rounded-md">
                Search
              </button>
            </div>
            {users.length > 0 &&
              users.map((eachUser) => {
                return (
                  <Users
                    key={eachUser._id}
                    name={eachUser.name}
                    email={eachUser.email}
                    eachUserId={eachUser._id}
                  />
                );
              })}
          </div>
        </div>
      </>
    )
  );
};

export default Dashboard;
