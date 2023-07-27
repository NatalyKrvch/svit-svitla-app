import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCatalogsAPI,
  addCatalogAPI,
  removeCatalogAPI,
  changeCatalogAPI,
} from "../../service/API/catalogsApi";


export const getCatalogs = createAsyncThunk(
  "catalogs/getCatalogs",
  async ({ page, per_page, catalogName }, { rejectWithValue }) => {
    try {
      const data = await getCatalogsAPI(
        page ?? null,
        per_page ?? null,
        catalogName || null,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCatalog = createAsyncThunk(
  "catalogs/addCatalog",
  async (catalog, thunkAPI) => {
    try {
      const data = await addCatalogAPI(catalog);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeCatalog = createAsyncThunk(
  "catalogs/removeCatalog",

  async (id, thunkAPI) => {
    try {
      const data = await removeCatalogAPI(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeCatalog = createAsyncThunk(
  "catalogs/changeCatalog",
  async ({id, catalog}, thunkAPI) => {
    try {
      const data = await changeCatalogAPI(id, catalog);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);