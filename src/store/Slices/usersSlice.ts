import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    isLoaded: false,
  },
  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload.data;
      state.isLoading = false;
      state.isLoaded = true;
    },
    getUsersFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;
