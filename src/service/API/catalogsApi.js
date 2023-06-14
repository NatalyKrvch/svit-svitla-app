import axios from 'axios';

axios.defaults.baseURL = "https://kapusta-backend.goit.global/api/catalogs";


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


