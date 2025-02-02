import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Users from "./Users";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/atom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [userInfoAtom, setUserInfoAtom] = useRecoilState(userAtom)
  const [filterSearch, setFilterSearch] = useState("");
  const backendUrl = import.meta.env.VITE_API_URL;
  const getAccountInfo = async () => {
    try {
      const accountInfo = await axios(`${backendUrl}/user/myinfo`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (accountInfo.status === 200) {
        if (accountInfo.data.info) {
          setUserInfoAtom({
            name: accountInfo.data.info.name,
            balance: accountInfo.data.info.balance,
          });
        }
      }
    } catch (error) {}
  };

  const getAllUsers = async () => {
    try {
      const res = await axios.get(
        `${backendUrl}/user/bulk?filter=${filterSearch}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.status === 200) {
        setUsers(res.data.matchedUsers);
      }
    } catch (error) {
      alert("Some error Occured");
    }
  };

  useEffect(() => {
    getAccountInfo();
    getAllUsers();
  }, []);

  return (
    userInfoAtom.name && (
      <>
        <div className="mt-12 p-5">
          <div className="font-bold text-xl mb-5">
            Your Balanece : Rs. {userInfoAtom.balance}{" "}
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
