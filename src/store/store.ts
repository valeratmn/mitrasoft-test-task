import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { postsSlice, userSlice } from "./Slices/Index";
import { postsSaga, userSaga } from "./Sagas/index";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: [saga],
});

saga.run(postsSaga);
saga.run(userSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
