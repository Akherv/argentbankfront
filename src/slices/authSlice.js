import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

//Initialize the state model
const initialState = {
  id: "",
  token: sessionStorage.getItem("token") || localStorage.getItem("token"),
  loginStatus: "",
  loginError: "",
  userLoaded: false,
  rememberUser: false,
};

//LoginUser use CreateAsyncThunk function to handle the API fetching on "user/login" endpoint.
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const res = await axios.post("http://localhost:3001/api/v1/user/login", {
        email: userData.email,
        password: userData.password,
      });
      const state = getState();
      //handle the data persistance based on the rememberUser property, if true the token is kept on localstorage else by default on session storage.
      if (state.auth.rememberUser === false) {
        sessionStorage.setItem("token", res.data.body.token);
      } else {
        localStorage.setItem("token", res.data.body.token);
      }
      return res.data.body.token;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//Define the auth reducer/extraReducers & actions with createSlice function
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //if token, decode token & return user data
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
    //Reset all the data storage & the initial state
    logoutUser(state) {
      sessionStorage.clear();
      localStorage.clear();
      return {
        ...state,
        id: "",
        token: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
        rememberUser: false,
      };
    },
    //Add rememberUser on the current state
    rememberUser(state, action) {
      const token = state.token;
      if (token) {
        return {
          ...state,
          rememberUser: true,
        };
      } else {
        return {
          ...state,
          rememberUser: action.payload || false,
        };
      }
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
          userLoaded: true,
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

//Destructure & export the actions creators
export const { loadUser, logoutUser, rememberUser } = authSlice.actions;

export default authSlice.reducer;
