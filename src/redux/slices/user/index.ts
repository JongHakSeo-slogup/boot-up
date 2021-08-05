import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User} from "../../../InterfaceAndType/user";

export interface UserState {
  user: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<{id: string, password: string}>) => {
      state.isLoading = true;
    },
    loginSuccess: (state: UserState, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});
