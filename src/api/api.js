import axios from 'axios';

const url = 'http://localhost:3001';

const interceptorRequest = axios.interceptors.request.use(function (config) {
  return config;
  }, function(error) {
    return Promise.reject(error);
});

const headers = {
  'Content-Type': 'text/plain',
  'Accept': 'application/json',
  "Access-Control-Allow-Origin": "*",
};

const api = {   
  AuthLogin : (email, password) => {
    return axios.post(`${url}/login?user=${email}&pwd=${password}`, 
      {headers},   
      interceptorRequest,
    )
  },

  ListResellers: (token) => {
    return axios.get(`${url}/resellers`, {
      headers: {
      'Content-Type': 'text/plain',
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "x-access-token": token,
    }});
  }   

}

export default api;