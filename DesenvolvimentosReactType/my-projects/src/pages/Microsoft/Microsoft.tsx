import React, { useState } from 'react'
import { Task } from '../../types/MicrosoftType'
import TaskForm from '../../componentes/Microsoft/TaskForm';
import TaskList from '../../componentes/Microsoft/TaskList';


export default function Microsoft() {
  const [tasks, setTask] = useState<Task[]>([]);

  const addTask = (newTask: Task) =>{
    setTask((prevTask) => [...prevTask, newTask]);
  }

  const toggleCompletion = (taskId: number) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>Microsoft
      <h1>Task app Management</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleCompletion={toggleCompletion} />
    </div>
  )
}
