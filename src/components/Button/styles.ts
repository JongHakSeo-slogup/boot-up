import styled from "styled-components";

// Basic 버튼
const BasicButton = styled.button<any>`
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  :disabled {
    color: ${(props) => props.theme.color.grayScale.four};
    background-color: ${(props) => props.theme.color.grayScale.five};
  }
`
const BasicBlackButton = styled(BasicButton)`
  color: ${(props) => props.theme.color.grayScale.white};
  background-color: ${(props) => props.theme.color.grayScale.one};
  
  :hover {
    background-color: ${(props) => props.theme.color.main.darkBlack};
  }
`
const BasicGreyButton = styled(BasicButton)`
  color: ${(props) => props.theme.color.grayScale.one};
  background-color: ${(props) => props.theme.color.grayScale.five};
  
  :hover {
    background-color: ${(props) => props.theme.color.grayScale.four};
  }
`

export const BasicBlackBiggerButton = styled(BasicBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.one};
  padding: 16px 24px;
`

export const BasicBlackBigButton = styled(BasicBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 14px 20px;
`

export const BasicBlackDefaultButton = styled(BasicBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 10px 14px;
`

export const BasicBlackSmallButton = styled(BasicBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 7px 10px;
`

export const BasicGreyBiggerButton = styled(BasicGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.one};
  padding: 16px 24px;
`

export const BasicGreyBigButton = styled(BasicGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 14px 20px;
`

export const BasicGreyDefaultButton = styled(BasicGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 10px 14px;
`

export const BasicGreySmallButton = styled(BasicGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 7px 10px;
`

// Block 버튼
const BlockButton = styled.button<any>`
  display: block;
  text-align: center;
  border-radius: 4px;
  :disabled {
    color: ${(props) => props.theme.color.grayScale.four};
    background-color: ${(props) => props.theme.color.grayScale.five};
  }
`
const BlockBlackButton = styled(BlockButton)`
  color: ${(props) => props.theme.color.grayScale.white};
  background-color: ${(props) => props.theme.color.grayScale.one};
  
  :hover {
    background-color: ${(props) => props.theme.color.main.darkBlack};
  }
`
const BlockGreyButton = styled(BlockButton)`
  color: ${(props) => props.theme.color.grayScale.one};
  background-color: ${(props) => props.theme.color.grayScale.five};
  
  :hover {
    background-color: ${(props) => props.theme.color.grayScale.four};
  }
`

export const BlockBlackBiggerButton = styled(BlockBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.one};
  padding: 20px 0;
`

export const BlockBlackBigButton = styled(BlockBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.one};
  padding: 16px 0;
`

export const BlockBlackDefaultButton = styled(BlockBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 14px 0;
`

export const BlockBlackSmallButton = styled(BlockBlackButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 7px 0;
`

export const BlockGreyBiggerButton = styled(BlockGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.one};
  padding: 20px 0px;
`

export const BlockGreyBigButton = styled(BlockGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.one};
  padding: 16px 0;
`

export const BlockGreyDefaultButton = styled(BlockGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.medium};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 14px 0;
`

export const BlockGreySmallButton = styled(BlockGreyButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
  padding: 7px 0;
`

// text 버튼
const TextButton = styled.button<any>`
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  background-color: transparent;
  :hover {
    text-decoration: underline;
  }
  :disabled {
    color: ${(props) => props.theme.color.grayScale.four};
  }
`

export const BiggerTextButton = styled(TextButton)`
  font-size: ${(props) => props.theme.fontSize.button.one};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.one};
`
export const BigTextButton = styled(TextButton)`
  font-size: ${(props) => props.theme.fontSize.button.two};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.two};
`
export const DefaultTextButton = styled(TextButton)`
  font-size: ${(props) => props.theme.fontSize.button.three};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.three};
`
export const SmallTextButton = styled(TextButton)`
  font-size: ${(props) => props.theme.fontSize.button.four};
  font-weight: ${(props) => props.theme.fontWeight.button.regular};
  line-height: ${(props) => props.theme.lineHeight.button.four};
`