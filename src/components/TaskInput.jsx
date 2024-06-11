// src/components/TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      mb={2}
    >
      <TextField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        label="Enter a new task"
        variant="outlined"
        fullWidth
        sx={{ marginRight: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
