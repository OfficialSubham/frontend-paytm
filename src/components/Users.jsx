import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { transactionUserIdAtom } from "../store/atom";

const Users = ({name, email, eachUserId}) => {
  const setTransactionUserId = useSetRecoilState(transactionUserIdAtom)
  const handleSendButton =(e) => {
    setTransactionUserId(e.target.id)
  }

  return (
    <div className="w-full flex justify-between items-center h-auto p-2 border rounded-md border-gray-400 font-bold mb-2 py-4">
      <div className="flex">
        <span className="bg-gray-200 w-12 flex items-center justify-center font-bold text-center mr-4 rounded-full">
          {name[0].toUpperCase()}
        </span>
        <div>
          {name}
          <br />
          <span className="text-sm font-extralight text-gray-500">{email}</span>
        </div>
      </div>

      <div>
        <Link to="/send"  className="bg-black rounded-md px-3 text-white py-2">
          <button id={eachUserId} onClick={handleSendButton}>
            Send Money
            </button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
