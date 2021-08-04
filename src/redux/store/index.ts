import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../reducers";
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootSaga from "../sagas";

export const customHistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  }
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
