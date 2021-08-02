import * as React from 'react';
import styled from 'styled-components';

interface Props{
    width?:string
    height?:string
    background?:string
    color?:string
    margin?:string
    children?:string
    onClick:()=>any
}


const Button: React.FC<Props> = (props: Props) => {
    const {width, height, background, color, margin} = props
    const styles = {
        width,
        height,
        background,
        color,
        margin
    }

    return(
        <React.Fragment>
            <ButtonEl {...styles} onClick={props.onClick}>{props.children}</ButtonEl>
        </React.Fragment>
    )
}

Button.defaultProps = {
    onClick:()=>{},
    width:'100%',
    height:'100%',
    background:'#000000',
    color:'#ffffff',
    margin: '',
}

const ButtonEl = styled.button<Props>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
    color: ${props => props.color};
    margin: ${props => props.margin};
    cursor:pointer;
`;

export default Button;