import { atom, selector } from "recoil";

const backendUrl = import.meta.env.VITE_API_URL

export const userAtom = atom({
  key: "userAtom",
  default: {},
});

export const transactionUserIdAtom = atom({
  key: "transactionUserIdAtom",
  default: "",
});

export const transactionUserAtom = atom({
  key: "transactionUserAtom",
  default: {},
});

export const allUsersAtom = atom({
  key: "allUsersAtom",
  default: []
});
