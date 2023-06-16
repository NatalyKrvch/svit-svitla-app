import axios from 'axios';
const baseURL = import.meta.env.REACT_APP_BASE_URL_BACK;
axios.defaults.baseURL = `${baseURL}/api/products`;


export const getProductsAPI = () => {
  return axios.get("/").then(({ data }) => {
    return data;
  });
};

export const addProductAPI = product => {
  return axios.post("/", product).then(({ data }) => {
    return data;
  });
};

export const removeProductAPI = (id) => {
  return axios.delete(`/${id}`).then(({ data }) => {
    return data;
  });
};

export const changeProductAPI = (id, product) => {
  return axios.put(`/${id}`, product).then(({ data }) => {
    return data;
  });
};

export const getProductByIdAPI = (id) => {
  return axios.get(`/${id}`).then(({ data }) => {
    return data;
  });
};

