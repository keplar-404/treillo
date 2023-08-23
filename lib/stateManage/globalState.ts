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



// Define the type of the obj parameter
type Property = {
  idforPreviewElement: string;
  text_Property: string;
  color_Style: string;
  position: string;
};

// Define the type of the state
type StateForPropertyComponent = {
  propertyForComponent: Property[];
  addProperty: (obj: Property) => void;
  deleteProperty: (id: string) => void;
};

export const useProperty = create<StateForPropertyComponent>((set) => ({
  propertyForComponent: [],
  addProperty: (obj) =>
    set((state) => {
      const id = obj.idforPreviewElement;
      const text = obj.text_Property;
      const color = obj.color_Style;
      const position = obj.position;
      let allProperty = state.propertyForComponent;

      if (allProperty.length === 0) {
        return { propertyForComponent: [obj] };
      } else {
        const matchedId = allProperty.filter(
          (data) => data.idforPreviewElement === id
        );
        const unMatchedId = allProperty.filter(
          (data) => data.idforPreviewElement !== id
        );

        if (matchedId.length === 0) {
          return { propertyForComponent: [...state.propertyForComponent, obj] };
        } else {
          // console.log(matchedId[0])
          matchedId[0].text_Property = text;
          matchedId[0].color_Style = color;
          matchedId[0].position = position;
          return { propertyForComponent: [...matchedId, ...unMatchedId] };
        }
      }
    }),
  deleteProperty: (id) =>
    set((state) => {
      const updatedPropety = state.propertyForComponent.filter(
        (data) => data.idforPreviewElement !== id
      );
      return { propertyForComponent: updatedPropety };
    }),
}));

