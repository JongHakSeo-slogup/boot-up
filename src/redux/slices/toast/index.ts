import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ToastHandleState {
  message: string;
  type: string;
}

export interface ToastState {
  isVisible: boolean;
  message: string | null;
  type: string | null;
};

const initialState = {
  isVisible: false,
  message: null,
  type: null
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    putToast: (state: ToastState, {payload}: PayloadAction<ToastHandleState>) => {
      state.isVisible = true;
      state.message = payload.message;
      state.type = payload.type;
    },
    closeToast: (state: ToastState) => {
      state.isVisible = false;
      state.message = null;
      state.type = null;
    }
  },
});
