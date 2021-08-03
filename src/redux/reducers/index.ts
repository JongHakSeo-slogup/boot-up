import { combineReducers } from "@reduxjs/toolkit";
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';
import { userSlice, UserState } from "../slices/user";

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  router: connectRouter(history),
});

export type RootState = {
  user: UserState;
};
