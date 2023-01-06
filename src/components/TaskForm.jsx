import { useState } from "react";

function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    // console.log(title, ' ', description);
    // Limpiar inputs
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escriba el titulo"
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        value={title}
      />

      <input
        type="text"
        placeholder="Escriba la descripcion"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
