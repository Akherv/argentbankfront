import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  getInfoStatus: "",
  getInfoError: "",
};

export const getInfoUser = createAsyncThunk(
  "info/getInfoUser",
  async ({ rejectWithValue }) => {
    try {
      const token = sessionStorage.getItem("token");
      // console.log(token);
      // const res = await axios.post(
      //   "http://localhost:3001/api/v1/user/profile",
      //   {
      //     headers: {
      //       Accept: "*/*",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }

      // );

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
      console.log(res.data.body);

      localStorage.setItem("data", JSON.stringify(res.data.body));
      return res.data.body;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const infoSlice = createSlice({
  name: "info",
  initialState,
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
  },
});

export default infoSlice.reducer;
