import React from 'react';
import styles from './style';

interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined,
    onClick?: ()=>void
    isFull: boolean,
    disable: boolean,
    text: string,
};

function Button({isFull, disable, text, ...rest}: ButtonProps) {
    return(
        <styles.ButtonLayout {...rest} isFull={isFull} disable={disable} >{text}</styles.ButtonLayout>
    )
};

Button.defaultProps = {
    type: 'button',
    isFull: false,
    disable: false,
}

export default Button;