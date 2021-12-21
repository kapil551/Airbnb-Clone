// Recoil Atoms
// https://recoiljs.org/docs/introduction/getting-started#atom
// https://recoiljs.org/docs/basic-tutorial/atoms

import { atom } from "recoil";

export const itemState = atom({
    key: "itemState",
    default: []
})