import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import jsonReducer from "./Reducer/jsonReducer";


const store = createStore(jsonReducer, applyMiddleware(thunk));
export default store;















// my middlewares 
// const myLogger = (store) => (next) => (action) => {
//     // console.log('store from logger', store);
//     // console.log('action from logger', action);
//     // next(action)

//     console.log('previous state'+store.getState())
//     console.log('action',action)
//     console.log('next state'+store.getState())
//     next(action)
// }

// const secondMiddle = (store) => (next) => (action) => {
//     console.log('second middle ware')
//     next(action)
// }
