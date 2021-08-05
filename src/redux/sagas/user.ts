import {all, takeLatest, call, put, getContext} from "redux-saga/effects";
import {userSlice} from "../slices/user";
import {login} from "../../apis/account";
import {PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../InterfaceAndType/user";
import URLS from "../../routes/urls";


export function* requestLogin(action: PayloadAction<{id: string, password: string}>) {
    const {id, password} = action.payload;
    try {
        const user: User = yield call(login, id, password);
        yield put(userSlice.actions.loginSuccess(user));
        localStorage.setItem('user', JSON.stringify(user));
        // 타입으로 History 넣으면 push 메소드가 없어서 타입 무시하고 진행
        // @ts-ignore
        const history = yield getContext('sagaHistory');
        history.push(URLS.MAIN_PAGE);
    } catch (e) {
        console.error(e);
    }
}

export default function* root() {
    yield all([takeLatest(userSlice.actions.login, requestLogin)]);
}
