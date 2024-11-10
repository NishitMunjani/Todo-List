import React from 'react';
import Task from './Task';
import { List } from '@mui/material';

const TodoList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <List>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </List>
  );
};

export default TodoList;
