import { createSlice } from "@reduxjs/toolkit";
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
    login: (state: UserState) => {
      state.isLoading = true;
    },
    loginSuccess: (state: UserState, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginError: (state: UserState, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});
