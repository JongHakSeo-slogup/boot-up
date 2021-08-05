import * as React from 'react';
import styled from 'styled-components';
import {Theme} from "../styles/theme";

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
    underline?:boolean
    type?: 'button' | 'submit' | undefined
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

    if(props.underline){
        return(
            <React.Fragment>
                <UnderLineBtn onClick={props.onClick} disabled={props.disabled}>{props.children}</UnderLineBtn>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <ButtonEl {...styles} type={props.type} disabled={props.disabled} onClick={props.onClick}>{props.children}</ButtonEl>
        </React.Fragment>
    )
}

Button.defaultProps = {
    onClick:()=>{},
    width:'100%',
    height:'100%',
    background: Theme.common.colors.black,
    color: Theme.common.colors.white,
    margin: '',
    border_radius:'4px',
    font_size: Theme.common.fontSizes.large,
    font_weight:'500',
    line_height:'24px',
    type:'button'
}

const ButtonEl = styled.button<Props>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.disabled ? Theme.common.colors.light_gray : `${props.background}`};
    color: ${props => props.disabled ? Theme.common.colors.light_text : `${props.color}`};
    margin: ${props => props.margin};
    border-radius: ${props => props.border_radius};
    font-size: ${props => props.font_size};
    font-weight: ${props => props.font_weight};
    line-height: ${props => props.line_height};
    border-style: none;
    cursor:pointer;
`;

const UnderLineBtn = styled.button<Props>`
  font-size:${Theme.common.fontSizes.medium};
  line-height:20px;
  font-weight:400;
  color:${Theme.common.colors.black};
  text-decoration: underline;
  border-style: none;
  background: none;
  cursor:pointer;
`;

export default Button;