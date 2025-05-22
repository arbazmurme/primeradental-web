import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Baseurl = process.env.NEXT_PUBLIC_BASE_URL;

const initialState = {
  categorytotal: [],
  serviceCategory: [],
  categoryLoading: true,
  isCategoryAvailable: false,
};

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/category/selected-cat`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

export const getServiceCategory = createAsyncThunk(
  "category/getServiceCategory",
  async (_, thunkAPI) => {
    try {
      const url = `${Baseurl}/api/v1/servicecat/all`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.categorytotal = action.payload.categories.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        }

        // Save to localStorage only on client
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "categorytotal",
            JSON.stringify(state.categorytotal)
          );
        }

        state.categoryLoading = false;
        state.isCategoryAvailable = true;
      })
      .addCase(getCategory.rejected, (state) => {
        state.categoryLoading = false;
      });
    builder
      .addCase(getServiceCategory.pending, (state) => {
        state.categoryLoading = true;
      })
      .addCase(getServiceCategory.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.serviceCategory = action.payload.serviceCategories.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        }
        // Save to localStorage only on client
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "serviceCategory",
            JSON.stringify(state.serviceCategory)
          );
        }

        state.categoryLoading = false;
        state.isCategoryAvailable = true;
      })
      .addCase(getServiceCategory.rejected, (state) => {
        state.categoryLoading = false;
      });
  },
});

export default CategorySlice.reducer;
