import {useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TaskCard({task, deleteTask}) {

  // function deleteTask(id){
  //   console.log("Eliminando...", id);
  // }

  // Llamando un contexto
  const valorX = useContext(TaskContext); // puedes tener varios contextos -> asi que indica cual quieres usar
  console.log(valorX);

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => {
        deleteTask(task.id)
      }}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
