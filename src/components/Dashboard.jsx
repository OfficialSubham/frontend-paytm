import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Users from "./Users";

const Dashboard = () => {

  const getAccountInfo = async () => {
    
  }

  useEffect(() => {
    
  }, [])

  return (
    <>
      <NavBar />
      <div className="mt-12 p-5">
        <div className="font-bold text-xl mb-5">Your Balanece : Rs. 6969 </div>

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
          <Users />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
