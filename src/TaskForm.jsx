import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    // console.log(title, ' ', description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escriba el titulo"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Escriba la descripcion"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
