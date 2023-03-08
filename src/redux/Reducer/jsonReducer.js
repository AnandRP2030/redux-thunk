const jsonReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case "TODO_DATA":
      return {
        ...state,
        todo: action.payload,
      };

    default:
      return state;
  }
};

export default jsonReducer;
