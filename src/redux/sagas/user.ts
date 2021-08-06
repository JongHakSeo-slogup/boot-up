import {all, takeLatest, call, put, getContext} from "redux-saga/effects";
import {userSlice} from "../slices/user";
import {login} from "../../apis/account";
import {PayloadAction} from "@reduxjs/toolkit";
import {UserRequest} from "../../InterfaceAndType/user";
import URLS from "../../routes/urls";
import {USER} from "../../constants/user";


export function* requestLogin(action: PayloadAction<{id: string, password: string}>) {
    const {id, password} = action.payload;
    try {
        const user: UserRequest = yield call(login, id, password);
        console.log(user);
        yield put(userSlice.actions.loginSuccess({row: user.data.row.user.user_eml_addr}));
        localStorage.setItem(USER, JSON.stringify(user));
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
