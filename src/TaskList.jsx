// import { useState, useEffect } from "react";

// console.log(data);

function TaskList({tasks}) {
//   const [tasks, setTasks] = useState(data);

//   useEffect(() => {
//     setTasks(data)
//   }, [])
  

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
