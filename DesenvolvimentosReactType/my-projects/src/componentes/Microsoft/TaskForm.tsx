import React, { useState } from "react";
import { Task } from "../../types/MicrosoftType";

interface TaskFormProps {
  addTask: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState<Task>({
    id: Date.now(),
    title: "",
    description: "",
    completed: false,
  });

  //lidar com alterações de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask((prevTask) => ({
      ...prevTask,
      [e.target.name]: e.target.value,
    }));
  };

  //manipular enviar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({
      id: Date.now(),
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <form
      //ao enviar
      onSubmit={handleSubmit}
    >
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newTask.title}
          //em mudança
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
