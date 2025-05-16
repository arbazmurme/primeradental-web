import { configureStore } from "@reduxjs/toolkit";
import atheReducer from "./auth/authSlice";
import sliderReducer from "./slider/sliderSlice";
import categoryReducer from "./category/categorySlice";
export const store = configureStore({
  reducer: {
    auth: atheReducer,
    slider: sliderReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
