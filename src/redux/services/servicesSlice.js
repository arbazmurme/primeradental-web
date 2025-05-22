import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const initialState = {
  mostBookedServices: [],
  servicesLoading: true,
  servicesAvailable: false,
};

export const getMostBookedServices = createAsyncThunk(
  "services/getMostBookedServices",
  async (_, thunkAPI) => {
    try {
        console.log("getMostBookedServices");
        
      const url = `${BaseUrl}/api/v1/service/bookedservices`;
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("404 Not Found");
    }
  }
);

const ServicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMostBookedServices.pending, (state) => {
        state.servicesLoading = true;
      })
      .addCase(getMostBookedServices.fulfilled, (state, action) => {
        state.mostBookedServices = action.payload.services;
        state.servicesLoading = false;
        state.servicesAvailable = true;
      })
      .addCase(getMostBookedServices.rejected, (state) => {
        state.servicesLoading = false;
      });
  },
});

export default ServicesSlice.reducer;

