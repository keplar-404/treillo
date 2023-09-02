import { create } from "zustand";
import {
  State,
  StateForPropertyComponent,
  StateForTaskComponents,
  StateForColumnComponents,
} from "./type";

// Create a state store for managing elements (Element add and remove)
export const useElementStore = create<State>((set) => ({
  element: [],
  // Add an element to the array
  inc: (obj) =>
    set((state) => {
      return { element: [...state.element, obj] };
    }),
  // Remove an element from the array by id
  dec: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.generatedId !== id
      );
      return { element: filtereddata };
    }),
  // Remove all elements with the specified task id
  delFullTask: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.taskParentId !== id
      );
      return { element: filtereddata };
    }),
  // Remove all elements with the specified column id
  delFullTaskColumn: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.coulmnParentid !== id
      );
      return { element: filtereddata };
    }),
}));

// --------------------------------------------------------------------------------------------

// Create a state store for managing preview elements (Element add and remove)
export const usePreviewElementStore = create<State>((set) => ({
  element: [],
  // Add a preview element to the array
  inc: (obj) =>
    set((state) => {
      return { element: [...state.element, obj] };
    }),
  // Remove a preview element from the array by id
  dec: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.generatedIdForPreviewElement !== id
      );
      return { element: filtereddata };
    }),
  // Remove all preview elements with the specified task id
  delFullTask: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.taskParentId !== id
      );
      return { element: filtereddata };
    }),
  // Remove all preview elements with the specified column id
  delFullTaskColumn: (id) =>
    set((state) => {
      const filtereddata = state.element.filter(
        (data) => data.coulmnParentid !== id
      );
      return { element: filtereddata };
    }),
}));

// Create a state store for managing property components
export const useProperty = create<StateForPropertyComponent>((set) => ({
  propertyForComponent: [],
  // Add or update a property component
  addProperty: (obj) =>
    set((state) => {
      const id = obj.idforPreviewElement || "";
      const allProperty = state.propertyForComponent;

      if (allProperty.length === 0) {
        return { propertyForComponent: [obj] };
      } else {
        // Find matching property and update its values
        const matchedId = allProperty.filter(
          (data) => data.idforPreviewElement === id
        );
        const unMatchedId = allProperty.filter(
          (data) => data.idforPreviewElement !== id
        );

        if (matchedId.length === 0) {
          return { propertyForComponent: [...state.propertyForComponent, obj] };
        } else {
          matchedId[0].text_Property = obj.text_Property || "";
          matchedId[0].color_Style = obj.color_Style || "";
          matchedId[0].position = obj.position || "";
          matchedId[0].image = obj.image || undefined;
          matchedId[0].slider = obj.slider || 0;
          matchedId[0].height = obj.height || 1;

          return { propertyForComponent: [...matchedId, ...unMatchedId] };
        }
      }
    }),
  // Delete a property component by id
  deleteProperty: (id) =>
    set((state) => {
      const updatedPropety = state.propertyForComponent.filter(
        (data) => data.idforPreviewElement !== id
      );
      return { propertyForComponent: updatedPropety };
    }),
  // Remove all property components with the specified task id
  delFullTask: (id) =>
    set((state) => {
      const filtereddata = state.propertyForComponent.filter(
        (data) => data.taskParentId !== id
      );
      return { propertyForComponent: filtereddata };
    }),
  // Remove all property components with the specified column id
  delFullTaskColumn: (id) =>
    set((state) => {
      const filtereddata = state.propertyForComponent.filter(
        (data) => data.coulmnParentid !== id
      );
      return { propertyForComponent: filtereddata };
    }),
}));

// Create a state store for managing task components
export const mangeTaskComponents = create<StateForTaskComponents>((set) => ({
  taskComponents: [],
  // Add a task component
  addTaskComponent: (obj) =>
    set((state) => {
      return { taskComponents: [...state.taskComponents, obj] };
    }),
  // Delete a task component
  deleteTaskCompnent: (obj) =>
    set((state) => {
      const taskParentid = obj.taskParentid;
      const filteredTaskComponents = state.taskComponents.filter(
        (data) => data.taskParentid !== taskParentid
      );
      return { taskComponents: filteredTaskComponents };
    }),
}));

// Create a state store for managing column components
export const mangeColumnComponents = create<StateForColumnComponents>(
  (set) => ({
    columnComponents: [],
    // Add a column component
    addColumnComponent: (obj) =>
      set((state) => {
        return { columnComponents: [...state.columnComponents, obj] };
      }),
    // Delete a column component
    deleteColumnCompnent: (obj) =>
      set((state) => {
        const id = obj.coulmnParentid;
        const filteredColumnComponents = state.columnComponents.filter(
          (data) => data.coulmnParentid !== id
        );
        return { columnComponents: filteredColumnComponents };
      }),
  })
);
