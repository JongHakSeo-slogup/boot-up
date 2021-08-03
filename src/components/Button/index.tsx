import React from 'react';
import styles from './style';

interface ButtonProps {
    isFull: boolean,
    disable: boolean,
    text: string,
    onClick: ()=>void,
};

function Button({isFull, disable, text, onClick}: ButtonProps) {
    return(
        <styles.ButtonLayout isFull={isFull} disable={disable} onClick={onClick} >{text}</styles.ButtonLayout>
    )
};

Button.defaultProps = {
    isFull: false,
    disable: false,
}

export default Button;