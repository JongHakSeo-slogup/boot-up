import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token, User } from "../../../InterfaceAndType/user";

export interface UserState {
  token: Token,
  user: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  token: { row: ''},
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
    loginSuccess: (state: UserState, action: PayloadAction<{row: string}>) => {
      state.isLoading = false;
      state.token.row = action.payload.row;
      console.log(state.token.row);
    },
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});
