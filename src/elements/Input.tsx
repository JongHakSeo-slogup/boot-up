import React from "react";
import styled from "styled-components";

export interface Props {
  auth?: boolean;
  name: string;
  type: "password" | "email";
  placeholder: string;
  for?: string;
  text?: string;
  margin?: string;
  validate?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  label?:boolean;
  value?: any;
  _ref?: any;
}

const Input: React.FC<Props> = (props: Props) => {
  if (props.auth) {
    return (
      <React.Fragment>
        { props.label? <Label htmlfor={props.name} margin={props.margin}>{props.text}</Label>: ''

        }
        <AuthInput
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          validate={props.validate}
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          ref={props._ref}
          margin={props.label ? '': props.margin}
          required
        ></AuthInput>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <input />
    </React.Fragment>
  );
};

Input.defaultProps = {
  margin: "0px",
  onChange: () => {},
};

const Label = styled.label<any>`
  margin: ${(props) => props.margin};
  font-size: 12px;
  line-height: 18px;
  color: #646464;
  font-weight: 400;
`;

const AuthInput = styled.input<Props>`
  width: 100%;
  border-style: none;
  border-bottom: 1px solid #efefef;
  padding-bottom: 12px;
  margin: ${(props) => props.margin};
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    color: #d2d2d2;
  }
  ::-webkit-input-placeholder {
    color: #d2d2d2;
  }
  ::-ms-input-placeholder {
    color: #d2d2d2;
  }
  &:focus {
    ${(props) =>
      props.validate
        ? "border-bottom: 2px solid #2E2E30"
        : "border-bottom: 2px solid #E60000"};
    outline-style: none;
  }
`;

export default Input;
