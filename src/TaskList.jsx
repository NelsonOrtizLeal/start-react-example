import { useState, useEffect } from "react";
import { tasks as data } from "./tasks";

console.log(data);

function TaskList() {
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setTasks(data)
  }, [])
  

  if (tasks.length === 0) {
    return <div>No hay tareas</div>;
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
