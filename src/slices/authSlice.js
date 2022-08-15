import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const initialState = {
  id: "",
  token: sessionStorage.getItem("token"),
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/user/login", {
        email: userData.email,
        password: userData.password,
      });
      sessionStorage.setItem("token", res.data.body.token);
      return res.data.body.token;
    } catch (err) {
      console.log(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          id: user.id,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: false };
    },
    logoutUser(state) {
      sessionStorage.clear();
      localStorage.clear();

      return {
        ...state,
        id: "",
        email: "",
        password: "",
        token: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          id: user.id,
          token: action.payload,
          loginStatus: "Fulfilled",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
