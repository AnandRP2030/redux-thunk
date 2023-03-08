

export default function reduxThunk(dispatch, getState) {
  getUserData(dispatch);
}

const getUserData = (dispatch) => {
  fetch(`http://localhost:3004/list`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "TODO_DATA",
        payload: data,
      });
    });
};
