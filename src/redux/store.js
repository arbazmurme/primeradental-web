import {configureStore} from '@reduxjs/toolkit';
import atheReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: atheReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
