import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess, getPostsFailure } from "../Slices/postsSlice";
import { fetchPosts } from "../api/api";

function* workGetPostsFetch(): Generator {
  try {
    const posts = yield call(fetchPosts);
    yield put(getPostsSuccess(posts));
  } catch (error) {
    yield put(getPostsFailure(error));
  }
}

function* postsSaga() {
  yield takeEvery("posts/getPostsFetch", workGetPostsFetch);
}

export default postsSaga;
