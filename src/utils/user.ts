import {TOKEN, USER} from "../constants/user";

export const hasToken = () => !!localStorage.getItem(TOKEN);
export const getUserInfo = () => localStorage.getItem(USER) ? JSON.parse(<string>localStorage.getItem(USER)) : null;