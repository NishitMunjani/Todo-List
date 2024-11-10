import React, { useState } from 'react';
import { ListItem, Checkbox, IconButton, TextField } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const Task = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = () => {
    if (editText.trim()) {
      updateTask(task.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <ListItem
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: task.completed ? 'line-through' : 'none',
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        color="primary"
      />
      {isEditing ? (
        <TextField
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyPress={(e) => e.key === 'Enter' && handleEditSubmit()}
          fullWidth
          variant="outlined"
          size="small"
        />
      ) : (
        <span style={{ flexGrow: 1 }}>{task.text}</span>
      )}
      <IconButton onClick={() => setIsEditing(!isEditing)} color="primary">
        <Edit />
      </IconButton>
      <IconButton onClick={() => deleteTask(task.id)} color="secondary">
        <Delete />
      </IconButton>
    </ListItem>
  );
};

export default Task;
