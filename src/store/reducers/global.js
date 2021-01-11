export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username,
      };    

    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.pwd,
      };    
  

    default:
      return state;
  }
};