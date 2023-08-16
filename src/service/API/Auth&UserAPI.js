import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = baseURL;

export const logInUserAPI = user => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.post("/api/users/login", user).then(({ data }) => {
    return data;
  });
};

export const logOutUserAPI = () => {
  axios.defaults.baseURL = `${baseURL}`;
  return axios.get("/api/users/logout").then(({ data }) => {
    return data;
  });
};

export const updateTokenAPI = (id) => {
  return axios.post(`/api/users/update-token?id=${id}`).then(({ data }) => {
    return data;
  });
};