import { all, takeLatest, call, put } from "redux-saga/effects";
import { userSlice } from "../slices/user";
import { getSession } from "../../apis/account";

export function* requestLogin() {
  try {
    const { data } = yield call(getSession);
    yield put(userSlice.actions.setUser(data.user));
  } catch (e) {
    console.error(e);
  }
}

export default function* root() {
  yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
