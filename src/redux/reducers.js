import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };
    case EDIT_TASK:
      const updatedTasks = [...state.tasks];
      updatedTasks[action.payload.index] = action.payload.task;
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
