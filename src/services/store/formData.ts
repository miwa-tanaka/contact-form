import { atom } from "recoil";

export const contactFormCheckFlagState = atom<boolean>({
  key: "contactFormCheckFlag",
  default: false,
});
