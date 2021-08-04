import { all, takeLatest, delay, put } from "redux-saga/effects";
import { login } from "../../apis/account";
import {userSlice} from "../slices/user";
import {routerSlice} from "../slices/Route";
import {PayloadAction} from "@reduxjs/toolkit";

export function* requestLogin(action: PayloadAction<{id: string, pw: string}>) {
  try {
    yield delay(2000);
    yield put(userSlice.actions.loginSuccess({name: 'name!'}));

    yield put(routerSlice.actions.goToHome());
  } catch (e) {
    console.error(e);
  }
}

function* watchLogin() {
  yield takeLatest(userSlice.actions.login, requestLogin);
}

export default function* root() {
  yield all([watchLogin()]);
}
