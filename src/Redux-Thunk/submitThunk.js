
import reduxThunk from "./thunk";

const submitThunk = (data) => {
    
    return (dispatch, getState) => {
        handleSubmit(dispatch,data)

    }
}

const handleSubmit = (dispatch, data) => {
    fetch('http://localhost:3004/list', {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name":data
        })
    }).then((res) => res.json())
    .then((data) => {
        dispatch(reduxThunk)
    })
  };

export default submitThunk;