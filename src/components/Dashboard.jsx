import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Users from "./Users";
import axios from "axios";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { allUsersAtom, userAtom } from "../store/atom";
import { allUsersSelector, userSelector } from "../store/selector";

const Dashboard = () => {
  const [users, setUsers] = useRecoilState(allUsersAtom);
  const lodableAllUsers = useRecoilValueLoadable(allUsersSelector);
    const loadableUserSelector = useRecoilValueLoadable(userSelector)
  const [userInfoAtom, setUserInfoAtom]= useRecoilState(userAtom)
  const [filterSearch, setFilterSearch] = useState("");
  const backendUrl = import.meta.env.VITE_API_URL;

  const handleFilter = (e) => {
    setFilterSearch(e.target.value);
  };

  const handleSearchFilter = async() => {
    try {
      const res = await axios.get(`${backendUrl}/user/bulk?filter=${filterSearch}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.status === 200) {
        return setUsers(res.data.matchedUsers)
      }
    } catch (error) {
      alert("Some error Occured");
      return [];
    }
  }

  const updateBalance = async () => {
    const accountInfo = await axios(`${backendUrl}/user/myinfo`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (accountInfo.status === 200) {
      if (accountInfo.data.info) {
        setUserInfoAtom({
          name: accountInfo.data.info.name,
          balance: accountInfo.data.info.balance
        })
      }
    }
  }

  useEffect(() => {
    if (lodableAllUsers.state === "hasValue" && users.length === 0) {
      setUsers(lodableAllUsers.contents);
    }
    updateBalance()
  }, [lodableAllUsers, setUsers,  userInfoAtom]);

  return (
    lodableAllUsers.state === "hasValue" && (
      <>
        <NavBar />
        <div className="mt-20 p-5">
          <div className="font-bold text-xl mb-5">
            Your Balanace : Rs. {userInfoAtom.balance}
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold">Users</h2>
            <div className="w-full flex gap-3 mb-4">
              <input
                type="text"
                className="px-3 rounded-md bg-white w-full"
                placeholder="Search users..."
                value={filterSearch}
                onChange={handleFilter}
                onKeyDown={(e) => {
                  if(e.key === "Enter") {
                    handleSearchFilter()
                  }
                }}
              />
              <button className="px-3 py-2 bg-black text-white font-bold rounded-md" onClick={handleSearchFilter}>
                Search
              </button>
            </div>
            {users.length > 0 ?
              users.map((eachUser) => {
                return (
                  <Users
                    key={eachUser._id}
                    name={eachUser.name}
                    email={eachUser.email}
                    eachUserId={eachUser._id}
                  />
                );
              }): "No User found"}
          </div>
        </div>
      </>
    )
  );
};

export default Dashboard;
