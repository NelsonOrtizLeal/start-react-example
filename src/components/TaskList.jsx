// import { useState, useEffect } from "react";
// console.log(data);

import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
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
        <TaskCard task={task} key={index}></TaskCard>
      ))}
    </div>
  );
}

export default TaskList;
