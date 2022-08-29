import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Initialize the state model
const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  getInfoStatus: "",
  getInfoError: "",
  getUpdateStatus: "",
  getUpdateError: "",
};

//GetInfoUser use CreateAsyncThunk function to handle the API fetching on "user/profile" endpoint.
export const getInfoUser = createAsyncThunk(
  "info/getInfoUser",
  async ({ rejectWithValue }) => {
    try {
      const token =
        sessionStorage.getItem("token") || localStorage.getItem("token");
      let headersList = {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      };
      let reqOptions = {
        url: "http://localhost:3001/api/v1/user/profile",
        method: "POST",
        headers: headersList,
      };
      let res = await axios.request(reqOptions);
      localStorage.setItem("data", JSON.stringify(res.data.body));
      return res.data.body;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//UpdateInfoUser use CreateAsyncThunk function to handle the API fetching on "user/profile" endpoint.
export const updateInfoUser = createAsyncThunk(
  "info/updateInfoUser",
  async (userData, { rejectWithValue }) => {
    try {
      const token =
        sessionStorage.getItem("token") || localStorage.getItem("token");
      let headersList = {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      };
      let reqOptions = {
        url: "http://localhost:3001/api/v1/user/profile",
        method: "PUT",
        headers: headersList,
        data: {
          firstName: userData.firstName,
          lastName: userData.lastName,
        },
      };
      let res = await axios.request(reqOptions);
      localStorage.setItem("data", JSON.stringify(res.data.body));
      return res.data.body;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//Define the info reducer/extraReducers & actions with createSlice function
export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    logoutInfoUser(state) {
      return {
        ...state,
        id: "",
        firstName: "",
        lastName: "",
        getInfoStatus: "",
        getInfoError: "",
        getUpdateStatus: "",
        getUpdateError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoUser.pending, (state) => {
      return { ...state, getInfoStatus: "pending" };
    });
    builder.addCase(getInfoUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          getInfoStatus: "Fulfilled",
        };
      } else return state;
    });
    builder.addCase(getInfoUser.rejected, (state, action) => {
      return {
        ...state,
        getInfoStatus: "rejected",
        getInfoError: action.payload,
      };
    });
    builder.addCase(updateInfoUser.pending, (state) => {
      return { ...state, getUpdateStatus: "pending" };
    });
    builder.addCase(updateInfoUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = action.payload;
        return {
          ...state,
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          getUpdateStatus: "Fulfilled",
        };
      } else return state;
    });
    builder.addCase(updateInfoUser.rejected, (state, action) => {
      return {
        ...state,
        getUpdateStatus: "rejected",
        getUpdateError: action.payload,
      };
    });
  },
});

export const { logoutInfoUser } = infoSlice.actions;

export default infoSlice.reducer;
