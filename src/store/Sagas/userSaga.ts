import { call, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess, getUserFailure } from "../Slices/userSlice";
import { fetchUser } from "../api/api";

function* workGetUserFetch({ payload }: any): Generator {
  try {
    const userId = payload;
    const user = yield call(() => fetchUser(userId));
    yield put(getUserSuccess(user));
  } catch (error) {
    yield put(getUserFailure(error));
  }
}

function* usersSaga() {
  yield takeEvery("user/getUserFetch", workGetUserFetch);
}

export default usersSaga;
