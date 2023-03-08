import reduxThunk from "./thunk";

const deleteThunk = (id) => {
  return (dispatch, getState) => {
    deleteUser(dispatch, id);
  };
};

//delete data
const deleteUser = (dispatch, id) => {
  fetch(`http://localhost:3004/list/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    console.log("delete successful");
    dispatch(reduxThunk);
  });
};

export default deleteThunk;
