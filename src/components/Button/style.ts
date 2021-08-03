import styled, {css} from "styled-components";

interface ButtonLayoutProps {
    isFull: boolean;
    disable: boolean;
}

const styles = {
    ButtonLayout: styled.button<ButtonLayoutProps>`
        cursor: pointer;
        width: ${({isFull}) => isFull ? '100%' : '50%'};
        ${({disable}) => (disable 
                ? css`background: #EFEFEF; color: #D2D2D2;` 
                : css`background: #2E2E30; color: #fff;`
        )}
        border-radius: 4px;
        padding: 16px 0;
        text-align: center;
    `,
}

export default styles;