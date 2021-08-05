import {all, takeLatest, call, put} from "redux-saga/effects";
import {userSlice} from "../slices/user";
import {login, getSession} from "../../apis/account";
import {PayloadAction} from "@reduxjs/toolkit";

export function* requestLogin(action: PayloadAction<{id: string, password: string}>) {
    const {id, password} = action.payload;
    try {
        yield call(login, id, password);
        yield put(userSlice.actions.loginSuccess);
    } catch (e) {
        console.error(e);
    }
}

export default function* root() {
    yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
