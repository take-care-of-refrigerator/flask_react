import { atom } from "recoil";

export const diaryState = atom<string>({
  key: "#diaryState",
  default: "",
});

export const firstMenuState = atom<string>({
  key: "#firstMenuState",
  default: "",
});

export const secondMenuState = atom<string>({
  key: "#secondMenuState",
  default: "",
});

export const isModalState = atom<boolean>({
  key: "#isModalState",
  default: false,
});

interface Ifrige {
  name: string;
  content: string | undefined;
}

export const frigeState = atom<Ifrige[]>({
  key: "#frigeState",
  default: [
    { name: "냉장", content: "hi" },
    { name: "냉동", content: "hi2" },
    { name: "냉장2", content: "hi3" },
  ],
});
