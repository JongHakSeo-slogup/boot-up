import { all, takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import { login } from "../../apis/account";
import {userSlice} from "../slices/user";
import {routerSlice} from "../slices/route";
import {PayloadAction} from "@reduxjs/toolkit";

function* requestLogin(action: PayloadAction<{id: string, pw: string}>) {
  const {id, pw} = action.payload;
  try {
    const user:SagaReturnType<typeof login> = yield call(login, id, pw);
    localStorage.setItem('user', JSON.stringify(user.row.user));
    yield put(userSlice.actions.loginSuccess({name: user.row.user.user_eml_addr}));

    yield put(routerSlice.actions.goToHome());
  } catch (e) {
    yield put(userSlice.actions.loginError(e));
    console.error(e);
  }
}

function* watchLogin() {
  yield takeLatest(userSlice.actions.login, requestLogin);
}

export default function* root() {
  yield all([watchLogin()]);
}
