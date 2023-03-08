import { useState } from "react";
import Todo from "./Todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import reduxThunk from "../../Redux-Thunk/thunk.js";
import submitThunk from "../../Redux-Thunk/submitThunk";

const TodoInput = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const addNewData = () => {
    dispatch(submitThunk(data)); // POST new data to json server
  };

  useEffect(() => {
    dispatch(reduxThunk);
  }, []);

  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        value={data}
        type="text"
        placeholder="Type todo"
      />
      <button onClick={addNewData}> Submit </button>
      <Todo />
    </div>
  );
};

export default TodoInput;
