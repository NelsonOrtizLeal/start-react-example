import { createContext } from "react";

// Generar el objeto Context -> Se guarda todas nuestras variables y funciones -> Se debe espicificar
export const TaskContext = createContext(); // Este es el que almacena los datos

export function TaskContextProvider(props) {
  let x = 20;
  return (
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
}
