import { all, takeLatest, getContext } from "redux-saga/effects";
import {routerSlice} from "../slices/route";

export function* goHome() {
    // @ts-ignore
    const history = yield getContext('history');
    history.push('/home');
}

function* watchGoHome() {
    yield takeLatest(routerSlice.actions.goToHome, goHome);
}

export default function* root() {
    yield all([watchGoHome()]);
}
