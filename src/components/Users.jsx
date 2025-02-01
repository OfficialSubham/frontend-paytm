import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="w-full flex justify-between items-center h-auto p-2 border rounded-md border-gray-400 font-bold mb-2 py-4">
      <div>
        <span className="bg-gray-200 px-3 py-2 font-bold text-center mr-4 rounded-full">
          U
        </span>
        User 1
      </div>

      <div>
        <Link to="/send" className="bg-black rounded-md px-3 text-white py-2">
          Send Money
        </Link>
      </div>
    </div>
  );
};

export default Users;
