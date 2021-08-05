import React from 'react';
import styles from './style';
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {toastSlice, ToastState} from "../../redux/slices/toast";

function Toast() {
    const {isVisible, message} = useSelector<RootState, ToastState>(state => state.toast);
    const dispatch = useDispatch();

    const toastClose = () => {
        dispatch(toastSlice.actions.closeToast());
    }

    if (!isVisible) return null;

    return (
        <styles.ToastWrapper>
            <styles.ToastLayout>
                <p>{message}</p>
                <Button text="확인" isFull onClick={toastClose} />
            </styles.ToastLayout>
        </styles.ToastWrapper>
    )
};

export default Toast;