import React from 'react';
import styles from './style';

export interface InputMessageProps {
    type: "pass" | "error" | "default",
    text: string
}

interface TextInputProps {
    type: string;
    placeholder?: string;
    label?: string;
    message: InputMessageProps;
};

function TextInput({type, placeholder, label, message}: TextInputProps) {
    return(
        <styles.InputLayout message={message}>
            {label && <label>로그인</label>}
            <input type={type} placeholder={placeholder} />
            {message.text && <p><img src={`/images/icon_${message.type}.png`} alt="경고" /> 에러입니다~!</p>}
        </styles.InputLayout>
    )
};

TextInput.defaultProps = {
    type: 'text',
    message: {
        type: "default",
        text: "",
    }
}

export default TextInput;