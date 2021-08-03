import { all, takeLatest } from "redux-saga/effects";
import { userSlice } from "../slices/user";

export function* requestLogin() {}

export default function* root() {
  yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
