import axios from 'axios';
const baseURL = import.meta.env.REACT_APP_BASE_URL_BACK;
axios.defaults.baseURL = `${baseURL}/api/catalogs`;


export const getCatalogsAPI = () => {
  return axios.get("/").then(({ data }) => {
    return data;
  });
};

export const addCatalogAPI = catalog => {
  return axios.post("/", catalog).then(({ data }) => {
    return data;
  });
};

export const removeCatalogAPI = (id) => {
  return axios.delete(`/${id}`).then(({ data }) => {
    return data;
  });
};

export const changeCatalogAPI = (id, catalog) => {
  return axios.put(`/${id}`, catalog).then(({ data }) => {
    return data;
  });
};


