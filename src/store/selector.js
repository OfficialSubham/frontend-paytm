import axios from "axios";
import { selector } from "recoil";
const backendUrl = import.meta.env.VITE_API_URL;
export const userSelector = selector({
  key: "userSelector",
  get: async ({ get }) => {
    try {
      const accountInfo = await axios(`${backendUrl}/user/myinfo`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (accountInfo.status === 200) {
        if (accountInfo.data.info) {
          return {
            name: accountInfo.data.info.name,
            balance: accountInfo.data.info.balance,
          };
        }
      }
    } catch (error) {
      alert("some error occured");
      return {};
    }
  },
});

export const allUsersSelector = selector({
  key: "allUsersSelector",
  get: async () => {
    try {
      const res = await axios.get(`${backendUrl}/user/bulk?filter=`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.status === 200) {
        return res.data.matchedUsers;
      }
    } catch (error) {
      alert("Some error Occured");
      return [];
    }
  },
})