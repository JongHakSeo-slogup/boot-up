import {TUTORIAL_VIEWED} from "../constants/tutorial";

export const isTutorialViewed = () => !!localStorage.getItem(TUTORIAL_VIEWED);