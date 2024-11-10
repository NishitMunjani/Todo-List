import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
