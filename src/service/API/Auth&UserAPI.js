import axios from 'axios';
const baseURL = import.meta.env.REACT_APP_BASE_URL_BACK;
axios.defaults.baseURL = `${baseURL}/api/users`;

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
