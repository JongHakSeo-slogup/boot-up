import { combineReducers } from "@reduxjs/toolkit";
import { userSlice, UserState } from "../slices/user";
import { routerSlice } from "../slices/route";
import {toastSlice, ToastState} from "../slices/toast";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  router: routerSlice.reducer,
  toast: toastSlice.reducer,
});

export type RootState = {
  user: UserState;
  router: string | null;
  toast: ToastState;
};
