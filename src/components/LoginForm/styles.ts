import styled from "styled-components";
import {BigTextButton} from "../Button/styles";

const getBorderBottomColor = (props: any) => {
  const { written, error, theme } = props;

  switch (true) {
    case error:
      return theme.color.state.red;
    case written:
      return theme.color.main.carpetBlack;
    default:
      return theme.color.grayScale.five;
  }
};

const getBorderBottomWidth = (props: any) => {
    const { written, error, theme } = props;

    switch (true) {
        case error || written:
            return '2px';
        default:
            return '1px';
    }
};

export const FormContainer = styled.div<any>`
  padding-top: 44px;
`
export const LoginInputContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin: 16px 0;

  :focus-within {
    label {
      opacity: 1;
    }

    input {
      border-bottom: 2px solid ${(props) => getBorderBottomColor(props)};
    }
  }

  label {
    opacity: ${(props) => props.written ? 1 : 0};
  }

  input {
    border-bottom: ${(props) => getBorderBottomWidth(props)} solid ${(props) => getBorderBottomColor(props)};
  }
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