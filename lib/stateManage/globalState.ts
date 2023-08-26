import { create } from "zustand";

interface Element {
  generatedId?: number;
  generatedIdForPreviewElement?: number;
  taskParentId: number;
}

interface State {
  element: Element[];
  inc: (obj: Element) => void;
  dec: (id: number | undefined) => void;
  delFullTask: (id: number | undefined) => void;
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
      // console.log(id);
      const filtereddata = state.element.filter(
        (data) => data.generatedId !== id
      );
      // console.log( filtereddata );
      return { element: filtereddata };
    }),
  delFullTask: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.taskParentId !== id
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
  delFullTask: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.taskParentId !== id
      );
      return { element: filtereddata };
    }),
}));

// Define the type of the obj parameter
type Property = {
  idforPreviewElement: number;
  text_Property?: string;
  color_Style?: string;
  position?: string;
  image?: Blob | File | undefined;
  slider?: number;
  height?: number;
};

// Define the type of the state
type StateForPropertyComponent = {
  propertyForComponent: Property[];
  addProperty: (obj: Property) => void;
  deleteProperty: (id: number | undefined) => void;
};

export const useProperty = create<StateForPropertyComponent>((set) => ({
  propertyForComponent: [],
  addProperty: (obj) =>
    set((state) => {
      const id = obj.idforPreviewElement || "";
      const text = obj.text_Property || "";
      const color = obj.color_Style || "";
      const position = obj.position || "";
      const image = obj.image || undefined;
      const slider = obj.slider || 0;
      const height = obj.height || 1;
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
          matchedId[0].image = image;
          matchedId[0].slider = slider;
          matchedId[0].height = height;

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

type PropertyOfTask = {
  taskParentid: number;
  usePropertyId?: number;
};
type StateForTaskComponents = {
  taskComponents: PropertyOfTask[];
  addTaskComponent: (obj: PropertyOfTask) => void;
  deleteTaskCompnent: (obj: PropertyOfTask) => void;
};

export const mangeTaskComponents = create<StateForTaskComponents>((set) => ({
  taskComponents: [],
  addTaskComponent: (obj) =>
    set((state) => {
      // const id  = obj.id
      return { taskComponents: [...state.taskComponents, obj] };
    }),
  deleteTaskCompnent: (obj) =>
    set((state) => {
      const usePropertyId = obj.usePropertyId;
      const taskParentid = obj.taskParentid;
      const allTaskComponents = [...state.taskComponents];
      const filteredTaskComponents = allTaskComponents.filter(
        (data) => data.taskParentid !== taskParentid
      );
      return { taskComponents: filteredTaskComponents };
    }),
}));

type PropertyOfColumn = {
  coulmnParentid: number;
};
type StateForColumnComponents = {
  columnComponents: PropertyOfColumn[];
  addColumnComponent: (obj: PropertyOfColumn) => void;
  deleteColumnCompnent: (obj: PropertyOfColumn) => void;
};

export const mangeColumnComponents = create<StateForColumnComponents>(
  (set) => ({
    columnComponents: [],
    addColumnComponent: (obj) =>
      set((state) => {
        // const id  = obj.id
        return { columnComponents: [...state.columnComponents, obj] };
      }),
    deleteColumnCompnent: (obj) =>
      set((state) => {
        const id = obj.coulmnParentid;
        const allColumnComponents = [...state.columnComponents];
        const filteredColumnComponents = allColumnComponents.filter(
          (data) => data.coulmnParentid !== id
        );
        return { columnComponents: filteredColumnComponents };
      }),
  })
);
