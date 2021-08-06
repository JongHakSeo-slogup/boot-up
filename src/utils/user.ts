import {TOKEN, USER} from "../constants/user";

export const hasToken = () => !!localStorage.getItem(TOKEN);
export const getUserInfo = () => localStorage.getItem(USER) ? JSON.parse(localStorage.getItem(USER) as string) : null;