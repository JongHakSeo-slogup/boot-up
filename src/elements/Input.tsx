import React from 'react';
import styled from 'styled-components';

export interface Props {
    auth?:boolean
    name:string
    type:string
    placeholder:string
    for?:string
    text?:string
    margin?:string
}

const Input: React.FC<Props> = (props: Props) => {

    if(props.auth){
        return(
            <React.Fragment>
                <Label for={props.name}>{props.text}</Label>
                <AuthInput margin={props.margin} type={props.type} name={props.name} placeholder={props.placeholder} required></AuthInput>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <input/>
        </React.Fragment>
    )

}

Input.defaultProps = {
    margin:'34px 0px 0px 0px'
}

const Label = styled.label<any>`
  
`;

const AuthInput = styled.input<Props>`
  width:100%;
  border-style: none;
  border-bottom: 1px solid black;
  padding-bottom: 12px;
  margin: ${props => props.margin};
  font-size:16px;
  line-height:24px;
  ::placeholder {color:#D2D2D2};
  ::-webkit-input-placeholder {color:#D2D2D2};
  ::-ms-input-placeholder {color:#D2D2D2};

`;

export default Input;