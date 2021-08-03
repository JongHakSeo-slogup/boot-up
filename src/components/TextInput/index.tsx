import React from 'react';
import styles from './style';

interface TextInputProps {
    type: string;
    placeholder?: string;
    label?: string;
};

function TextInput({type, placeholder, label}: TextInputProps) {
    return(
        <styles.InputLayout>
            {label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} />
        </styles.InputLayout>
    )
};

TextInput.defaultProps = {
    type: 'text',
}

export default TextInput;