import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reduxThunk from "../../Redux-Thunk/thunk";
import deleteThunk from "../../Redux-Thunk/deleteThunk";
export default function Todo() {
  const dispatch = useDispatch();

  const callDeleteThunk = (id) => {
    dispatch(deleteThunk(id));
  };

  // get data from store
  const todoData = useSelector((store) => {
    return store.todo;
  });

  const divStyle = {
    display: "flex",
    margin: "10px",
  };

  return (
    <div>
      <h1> todo app </h1>
      {todoData.length > 0 ? (
        <div>
          {todoData.map((elem, index) => {
            return (
              <div key={elem.id} style={divStyle}>
                {" "}
                <li> {elem.name} </li> &nbsp;&nbsp;
                <button
                  onClick={() => {
                    callDeleteThunk(elem.id);
                  }}
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h1> No data availble </h1>
      )}
    </div>
  );
}
