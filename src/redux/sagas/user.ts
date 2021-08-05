import { all, takeLatest, call, put } from "redux-saga/effects";
import { userSlice } from "../slices/user";
import { getSession } from "../../apis/account";
import {history} from "../reducers";
import axios from "axios";
import {getCookie} from "../../shared/Cookie";
import URLS from "../../routes/urls";

axios.defaults.headers.common["x-auth-token"] = getCookie(
    "x-auth-token");

export function* requestLogin() {
  console.log('start generating')
  try {
    console.log('try')
    const { data } = yield call(getSession);
    console.log(data.row.user)
    yield put(userSlice.actions.setUser(data.row.user));
  } catch (e) {
    console.error(e);
  }
}

export default function* root() {
  yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
