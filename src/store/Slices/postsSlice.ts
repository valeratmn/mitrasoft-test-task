import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    isLoaded: false,
    error: "",
  },
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload.data;
      state.isLoading = false;
      state.isLoaded = true;
    },
    getPostsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    setPostSortByTitle: (state) => {
      state.posts = state.posts.sort((a: any, b: any) =>
        a.title > b.title ? 1 : -1
      );
    },
    setPostSortById: (state) => {
      state.posts = state.posts.sort((a: any, b: any) =>
        a.id > b.id ? 1 : -1
      );
    },
  },
});

export const {
  getPostsFetch,
  getPostsSuccess,
  getPostsFailure,
  setPostSortByTitle,
  setPostSortById,
} = postsSlice.actions;
