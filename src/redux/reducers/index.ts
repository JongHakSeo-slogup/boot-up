import { combineReducers } from "@reduxjs/toolkit";
import { userSlice, UserState } from "../slices/user";
import { routerSlice } from "../slices/Route";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  router: routerSlice.reducer,
});

export type RootState = {
  user: UserState;
  router: string | null;
};
