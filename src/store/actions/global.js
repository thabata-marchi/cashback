import {useReducer} from "react";
import {globalReducer} from '../reducers/global';

export const initialState = {};
  
const GlobalActions = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const globalDispatch = {
    token: state.token,
    username: state.username,
    pwd: state.pwd,

    setToken: (token) => {
      console.log("TO NO STORE", token);
      dispatch({ type: "SET_TOKEN", token: token });
    },

    setUsername: (username) => {
      dispatch({ type: "SET_USERNAME", username: username });
    },

    setPassword: (pwd) => {
      dispatch({ type: "SET_PASSWORD", pwd: pwd });
    },

  };
 
 return {
   globalDispatch,
   initialState,
 };
};

export default GlobalActions;