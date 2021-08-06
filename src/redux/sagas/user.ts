import { all, takeLatest, call, put } from "redux-saga/effects";
import { userSlice } from "../slices/user";
import { getSession } from "../../apis/account";
import axios from "axios";
import {getCookie} from "../../shared/Cookie";

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
    if( axios.isCancel(e) ){
      console.log(e.message);
    } else {
      console.error(e);
      if (e.rawError) {
        console.log(e.rawError.response.data.rows[0].msg);
        if (e.rawError.response.data.rows[0].msg === 'jsonWebTokenError') {
          window.alert('인증 에러, 잘못된 권한 또는 권한 음슴')
        }
      }
    }
  }
}

export default function* root() {
  yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
