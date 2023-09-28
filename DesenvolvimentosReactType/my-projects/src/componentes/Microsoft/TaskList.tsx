import React from 'react'
import { Task } from '../../types/MicrosoftType';

interface TaskListProps {
    tasks: Task[];
    toggleCompletion: (taskId: number) => void;

  }

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleCompletion }) => {
    return (
        <div>
          <h2>Task List</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
                <button onClick={() => toggleCompletion(task.id)}>
                  {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    

export default TaskList