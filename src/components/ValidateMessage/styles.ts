import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const IconFigure = styled.figure`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`
export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const Description = styled.p`
  font-size: ${({theme}) => theme.fontSize.body.three};
  font-weight: ${({theme}) => theme.fontWeight.body.regular};
  line-height: ${({theme}) => theme.lineHeight.body.three};
  color: ${({theme}) => theme.color.state.red};
`