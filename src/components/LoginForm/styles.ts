import styled from "styled-components";
import {BigTextButton} from "../Button/styles";

export const FormContainer = styled.form<any>`
  padding-top: 44px;
`
export  const LoginInputContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`
export const InputLabel = styled.label.attrs<any>(props => ({
    htmlFor: props.htmlFor
}))`
  color: ${(props) => props.theme.color.grayScale.two};
  font-size: ${(props) => props.theme.fontSize.body.three};
  font-weight: ${(props) => props.theme.fontWeight.body.regular};
  line-height: ${(props) => props.theme.lineHeight.body.three};
`

export const Input = styled.input.attrs<any>(props => ({
    id: props.id,
    type: props.type,
    placeholder: props.placeholder,
}))`
  width: 100%;
  color: ${(props) => props.theme.color.grayScale.two};
  font-size: ${(props) => props.theme.fontSize.body.one};
  line-height: ${(props) => props.theme.lineHeight.body.one};
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${(props) => props.theme.color.grayScale.five};
`;

export const LoginButtonContainer = styled.div<any>`
  padding: 16px 0;
`

export const LoginMenuContainer = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.color.grayScale.two};
  line-height: ${(props) => props.theme.lineHeight.body.two};
`

export const FindButton = styled(BigTextButton)`
  color: ${(props) => props.theme.color.grayScale.two};
  line-height: ${(props) => props.theme.lineHeight.body.two};
`