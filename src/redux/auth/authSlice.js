import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const initialState = {
  mob: "",
  otp: '',
  loginData: null,
  primeAddress: null,
  userData: null,
  isAuth: false,
};

export const userRegistation = createAsyncThunk(
  'user/userRegistation',
  async (formData, thunkAPI) => {
    try {
      const config = {
        maxBodyLength: Infinity,
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BaseUrl}/api/v1/user/login-mobile`;
      const resp = await axios.post(url, formData, config);
      await localStorage.setItem('userData', JSON.stringify(resp.data.user));
      return resp.data;
    } catch (error) {
      return error.response.data;
    }
  },
);

export const mobileExist = createAsyncThunk(
  'user/mobileExist',
  async ({ number }, thunkAPI) => {
    try {
      const config = {
        maxBodyLength: Infinity,
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BaseUrl}/api/v1/user/mobile/${number}`;

      const resp = await axios.get(url, config);
      if (resp.data.success === true) {
        await localStorage.setItem('userData', JSON.stringify(resp.data.user));

        return resp.data;
      }
    } catch (error) {
      return {
        success: false,
        message: 'New User',
      };
    }
  },
);

export const verifyUserEmail = createAsyncThunk(
  'user/verifyUserEmail',
  async (email, thunkAPI) => {
    try {
      const config = {
        maxBodyLength: Infinity,
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BaseUrl}/api/v1/user/email/${email}`;
      const response = await axios.get(url, config);
      if (response.data.success === true) {
        return response.data;
      }
    } catch (error) {
      return {
        success: false,
        message: 'Email already exists',
      };
    }
  },
);

export const add_Address = createAsyncThunk(
  'Athentication/add_Address',
  async (formData, thunkAPI) => {
    try {
      const config = {
        maxBodyLength: Infinity,
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BaseUrl}/api/v1/user/address`;
      const resp = await axios.put(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('client Not create');
    }
  },
);

export const UpdateUserSingleAddress = createAsyncThunk(
  'Athentication/UpdateUserSingleAddress',
  async (formData, thunkAPI) => {
    try {
      const config = {
        maxBodyLength: Infinity,
        headers: { 'Content-Type': 'application/json' },
      };
      const url = `${BaseUrl}/api/v1/user/updateclientsingleaddress`;
      const resp = await axios.put(url, formData, config);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('client Not create');
    }
  },
);

export const loadUserFromStorage = createAsyncThunk(
  'user/loadUserFromStorage',
  async (_, thunkAPI) => {
    try {
      const storedUser = await localStorage.getItem('userData');
      if (storedUser) {
        return {
          success: true,
          user: JSON.parse(storedUser),
        };
      } else {
        return {
          success: false,
          user: null,
        };
      }
    } catch (error) {
      return {
        success: false,
        user: null,
      };
    }
  },
);

export const loginAuthentication = createAsyncThunk(
  'Authentication/loginAuthentication',
  async (formdetails, thunkAPI) => {
    let resp = { success: false, message: 'new Mobile' };
    try {
      const config = {
        Headers: { 'Content-Type': 'application/json' },
        maxBodyLength: Infinity,
      };
      const url = `${BaseUrl}/api/v1/user/sendsms`;
      resp = await axios.post(url, formdetails, config);
      return resp.data;
    } catch (error) {
      return error;
    }
  },
);

const AuthenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    LoginOtp(state, action) {
      state.mob = action.payload.number;
      state.otp = action.payload.OTP;
    },
    logoutUser(state, action) {
      state.isAuth = false;
      state.loginData = null;
      localStorage.removeItem('userData');
    },
    setUpdatedUserData: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
    },
    UpdateAddressStatus(state, action) {
      state.isAuth = false;

      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(action.payload));
      state.primeAddress = action.payload.Addresses.filter(
        address => address.prime === true,
      );
    },
    setMobileNumber: (state, action) => {
      state.mob = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userRegistation.pending, state => {
        state.isAuth = false;
      })
      .addCase(userRegistation.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.isAuth = true;
          state.userData = action.payload.user;
        } else {
          state.isAuth = false;
          state.userData = null;
        }
      })
      .addCase(userRegistation.rejected, (state, action) => {
        state.isAuth = false;
        state.userData = null;
      })
      .addCase(loadUserFromStorage.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.userData = action.payload.user;
          state.primeAddress = action.payload.user.Addresses.filter(
            address => address.prime === true,
          );
          state.isAuth = true;
        } else {
          state.userData = null;
          state.isAuth = false;
        }
      })
      .addCase(mobileExist.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.isAuth = true;
          state.userData = action.payload.user;
          localStorage.setItem('userData', JSON.stringify(action.payload.user));
          state.primeAddress = action.payload.user.Addresses.filter(
            address => address.prime === true,
          );
        } else {
          state.isAuth = false;
          state.userData = null;
        }
      })
      .addCase(add_Address.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.isAuth = true;
          state.userData = action.payload.user;
          localStorage.setItem('userData', JSON.stringify(action.payload.user));
          state.primeAddress = action.payload.user.Addresses.filter(
            address => address.prime === true,
          );
        } else {
          state.isAuth = false;
          state.userData = null;
        }
      });
  },
});

export const { LoginOtp, logoutUser, setUpdatedUserData, UpdateAddressStatus } =
  AuthenticationSlice.actions;
export const authActions = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
