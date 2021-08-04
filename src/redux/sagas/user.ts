import { all, takeLatest, call, put } from "redux-saga/effects";
import { login } from "../../apis/account";
import {userSlice} from "../slices/user";
import {routerSlice} from "../slices/Route";
import {PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../InterfaceAndType/user";

function* requestLogin(action: PayloadAction<{id: string, pw: string}>) {
  const {id, pw} = action.payload;
  try {
    const user:User = yield call(login, id, pw);
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
