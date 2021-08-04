import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { User } from "../../../InterfaceAndType/user";

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: Error | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<{id: string, pw: string}>) => {
      state.isLoading = true;
    },
    loginSuccess: (state: UserState, {payload}: {payload: User}) => {
      state.isLoading = false;
      state.user = payload;
    },
    loginError: (state: UserState, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    }
  },
});
