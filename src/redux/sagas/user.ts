import { all, takeLatest, call } from "redux-saga/effects";
import { userSlice } from "../slices/user";
import { login } from "../../apis/account";

export function* requestLogin() {
  try {
    yield call(login);
  } catch (e) {
    console.error(e);
  }
}

export default function* root() {
  yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
