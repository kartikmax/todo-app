import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";
import { editTask } from "../redux/actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Snackbar,
} from "@mui/material";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    setCurrentTask(tasks[index]);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (currentIndex !== null && currentTask.trim()) {
      dispatch(editTask(currentIndex, currentTask));
      setSnackbarOpen(true);
      setOpen(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <Button onClick={() => handleEdit(index)}>Edit</Button>
            <Button onClick={() => handleDelete(index)}>Delete</Button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Task edited"
      />
    </div>
  );
};

export default TaskList;
