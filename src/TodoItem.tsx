import React from 'react';

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

interface IProps {
  task: ITodo;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<IProps> = ({ task, deleteTask, toggleCompleted }) => {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <input 
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </p>
        <button className='del-btn' onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;