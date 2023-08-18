
import { create } from "zustand";

export const useElementStore = create((set) => ({
  element: [],
  inc: (ele: JSX.Element) =>
    set((state: any) => ({ element: [...state.element, ele] })),
}));

export const useElementStyle = create((set)=> ({
  textBoxType: "",
  textBox: "",
  headingBox:"",
  color: "",
  position: ""
}))