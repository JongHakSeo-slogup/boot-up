import { all } from "redux-saga/effects";
import user from "./user";
import router from "./router";

export default function* rootSaga() {
  yield all([user(), router()]);
}