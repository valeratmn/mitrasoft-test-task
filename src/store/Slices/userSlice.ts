import { createSlice } from "@reduxjs/toolkit";
import { ProfileState } from "../../types/IProfile";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "",
      email: "",
      username: "",
      address: { city: "" },
      website: "",
    },
    isLoading: false,
    isLoaded: false,
    error: "",
  } as ProfileState,
  reducers: {
    getUserFetch: (state, action) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload.data;
      state.isLoading = false;
      state.isLoaded = true;
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { getUserFetch, getUserSuccess, getUserFailure } =
  userSlice.actions;
