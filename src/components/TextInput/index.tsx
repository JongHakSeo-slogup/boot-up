import React from 'react';
import styles from './style';

export interface InputMessageProps {
    type: "pass" | "error" | "default",
    text: string
}

interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    message: InputMessageProps;
};

function TextInput({label, message, ...rest}: TextInputProps) {
    return(
        <styles.InputLayout message={message}>
            {label && <label>로그인</label>}
            <input {...rest} />
            {message.text && <p><img src={`/images/icon_${message.type}.png`} alt="경고" />{message.text}</p>}
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