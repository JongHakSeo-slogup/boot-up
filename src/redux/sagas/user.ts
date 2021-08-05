import { all, takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import { login } from "../../apis/account";
import {userSlice} from "../slices/user";
import {routerSlice} from "../slices/route";
import {PayloadAction} from "@reduxjs/toolkit";
import {WRONG_ID_OR_PASSWORD} from "../../network/HttpError";
import {toastSlice} from "../slices/toast";

function* requestLogin(action: PayloadAction<{id: string, pw: string}>) {
  const {id, pw} = action.payload;
  try {
    const user:SagaReturnType<typeof login> = yield call(login, id, pw);
    localStorage.setItem('user', JSON.stringify(user.row.user));
    yield put(userSlice.actions.loginSuccess({name: user.row.user.user_eml_addr}));

    yield put(routerSlice.actions.goToHome());
  } catch (e) {
    yield put(userSlice.actions.loginError(e));
    if(e) {
      let errorMessage = '';
      switch(e.message) {
        case WRONG_ID_OR_PASSWORD:
          errorMessage = '아이디 또는 비밀번호가 일치하지 않습니다. 5회 이상 틀릴 경우 로그인이 제한됩니다.';
          break;
        default:
          break;
      }

      yield put(toastSlice.actions.putToast({message: errorMessage, type: 'error'}));
    }
  }
}

function* watchLogin() {
  yield takeLatest(userSlice.actions.login, requestLogin);
}

export default function* root() {
  yield all([watchLogin()]);
}
