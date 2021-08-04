import * as React from 'react';
import styled from 'styled-components';

interface Props{
    width?:string
    height?:string
    background?:string
    color?:string
    margin?:string
    border_radius?:string;
    font_size?:string;
    font_weight?:string;
    line_height?:string;
    children?:any;
    disabled?:boolean
    onClick?:()=>any
}


const Button: React.FC<Props> = (props: Props) => {
    const {font_size, font_weight, line_height, border_radius, width, height, background, color, margin} = props
    const styles = {
        font_size,
        font_weight,
        line_height,
        border_radius,
        width,
        height,
        background,
        color,
        margin
    }

    return(
        <React.Fragment>
            <ButtonEl {...styles} disabled={props.disabled} onClick={props.onClick}>{props.children}</ButtonEl>
        </React.Fragment>
    )
}

Button.defaultProps = {
    onClick:()=>{},
    width:'100%',
    height:'100%',
    background:'#2E2E30',
    color:'#FFFFFF',
    margin: '',
    border_radius:'4px',
    font_size:'16px',
    font_weight:'500',
    line_height:'24px'
}

const ButtonEl = styled.button<Props>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background};
    color: ${props => props.color};
    margin: ${props => props.margin};
    border-radius: ${props => props.border_radius};
    font-size: ${props => props.font_size};
    font-weight: ${props => props.font_weight};
    line-height: ${props => props.line_height};
    border-style: none;
    cursor:pointer;
`;

export default Button;