import axios from 'axios';

axios.defaults.baseURL = "https://kapusta-backend.goit.global/api/users";

export const logInUserAPI = user => {
  return axios.post('/login', user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = () => {
  return axios.post('/logout').then(({ data }) => {
    return data;
  });
};
