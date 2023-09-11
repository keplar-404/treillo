// Define the structure of an Element
interface Element {
  generatedId?: number;
  generatedIdForPreviewElement?: number;
  taskParentId: number;
  coulmnParentid: number;
}

// Define the state shape for managing elements
export interface State {
  element: Element[];
  inc: (obj: Element) => void; // Function to add an element
  dec: (id: number | undefined) => void; // Function to remove an element by id
  delFullTask: (id: number | undefined) => void; // Function to remove all elements with a specified task id
  delFullTaskColumn: (id: number | undefined) => void; // Function to remove all elements with a specified column id
}

// Define the type for managing properties of components
type Property = {
  idforPreviewElement: number;
  taskParentId: number;
  coulmnParentid: number;
  text_Property?: string;
  color_Style?: string;
  position?: string;
  image?: Blob | File | undefined;
  slider?: number;
  height?: number;
};

// Define the state shape for managing properties of components
export type StateForPropertyComponent = {
  propertyForComponent: Property[];
  addProperty: (obj: Property) => void; // Function to add or update a property
  deleteProperty: (id: number | undefined) => void; // Function to delete a property by id
  delFullTask: (id: number | undefined) => void; // Function to remove all properties with a specified task id
  delFullTaskColumn: (id: number | undefined) => void; // Function to remove all properties with a specified column id
};

// Define the properties of a task
export type PropertyOfTask = {
  taskParentid: number;
  coulmnParentid?: number;
};

// Define the state shape for managing task components
export type StateForTaskComponents = {
  taskComponents: PropertyOfTask[];
  addTaskComponent: (obj: PropertyOfTask) => void; // Function to add a task component
  deleteTaskCompnent: (obj: PropertyOfTask) => void; // Function to delete a task component
  arrayMoveTaskComponent:(array: PropertyOfTask[]) => void
};

// Define the properties of a column
export type PropertyOfColumn = {
  coulmnParentid: number;
};

// Define the state shape for managing column components
export type StateForColumnComponents = {
  columnComponents: PropertyOfColumn[];
  addColumnComponent: (obj: PropertyOfColumn) => void; // Function to add a column component
  deleteColumnCompnent: (obj: PropertyOfColumn) => void; // Function to delete a column component
  arrayMoveColumnComponent: (array:PropertyOfColumn[]) => void
};
