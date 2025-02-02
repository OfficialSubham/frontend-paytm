import { atom, selector } from "recoil";



const backendUrl = import.meta.env.VITE_API_URL

export const userAtom = atom({
  key: "userAtom",
  default: {}
});
