import { create } from "zustand";

interface Element {
  generatedId?: number;
  generatedIdForPreviewElement?: number;
}

interface State {
  element: Element[];
  inc: (obj: Element) => void;
  dec: (id: number) => void;
}

// Create a state with an initial empty array of elements for Element add and remove
export const useElementStore = create<State>((set) => ({
  element: [],
  // Define an inc function that adds an element to the array
  inc: (obj) =>
    set((state) => {
      return { element: [...state.element, obj] };
    }),
  // Define a dec function that removes an element from the array by id
  dec: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.generatedId !== id
      );
      return { element: filtereddata };
    }),
}));



// --------------------------------------------------------------------------------------------


// Create a state with an initial empty array of elements preview add and remove
export const usePreviewElementStore = create<State>((set) => ({
  element: [],
  // Define an inc function that adds an element to the array
  inc: (obj) =>
    set((state) => {
      return { element: [...state.element, obj] };
    }),
  // Define a dec function that removes an element from the array by id
  dec: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.generatedIdForPreviewElement !== id
      );
      return { element: filtereddata };
    }),
}));
