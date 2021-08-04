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
  value?: any;
}

const Input: React.FC<Props> = (props: Props) => {
  if (props.auth) {
    return (
      <React.Fragment>
        <Label htmlfor={props.name}>{props.text}</Label>
        <AuthInput
          onChange={props.onChange}
          validate={props.validate}
          margin={props.margin}
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
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

const Label = styled.label<any>``;

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
