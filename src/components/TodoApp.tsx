import { useState } from 'react';
import { ListToDo } from './ListToDo';

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>('');

  const [listToDo, setListToDo] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setListToDo([...listToDo, newTask]);
    setNewTask('');
  };

  const handleDeleteTask = (index: number) => setListToDo( tasks => tasks.filter((_, i) => i !== index) ) 

  return (
    <div>
      <h1>To-Do List</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ListToDo 
        listToDo={listToDo} 
        deleteTask={handleDeleteTask} 
      />
    </div>
  );
};
