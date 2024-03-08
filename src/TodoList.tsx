import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([
    {
      id: 1,
      text: 'Make To-do List App',
      completed: true
    },
    {
      id: 2,
      text: 'Style To-do List App',
      completed: true
    },
    {
      id: 3,
      text: 'Link To-do List App to Github',
      completed: false
    }
  ]);

  const [text, setText] = useState<string>('');

  const addTask = (newText: string) => {
    const newTask: ITodo = {
      id: Date.now(),
      text: newText,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  };

  return (
      <div className="todo-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
          <div className="form">
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <button onClick={() => addTask(text)}>Add Task</button>
          </div>
        </div>
  );
};

export default TodoList;