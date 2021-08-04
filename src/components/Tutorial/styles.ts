import styled from "styled-components";

export const Title = styled.h1<any>`
  margin: 68px 20px 0 20px;
  font-size: ${({theme}) => theme.fontSize.heading.one};
  font-weight: ${({theme}) => theme.fontWeight.heading.bold};
  line-height: ${({theme}) => theme.lineHeight.heading.one};
  color: ${({theme}) => theme.color.main.carpetBlack};
`;

export const Description = styled.p<any>`
  margin: 16px 20px 0 20px;
  font-size: ${({theme}) => theme.fontSize.body.one};
  font-weight: ${({theme}) => theme.fontWeight.body.regular};
  line-height: ${({theme}) => theme.lineHeight.body.one};
  color: ${({theme}) => theme.color.grayScale.two};
`;
export const ImageFigure = styled.figure<any>`
  position: absolute;
  top: 210px;
  left: 0;
  width: 100%;
  padding: 0 20px;
`;
export const Image = styled.img<any>`
  display: block;
  width: 100%;
  object-fit: contain;
`
export const ButtonContainer = styled.div<any>`
  position: fixed;
  left: 0;
  bottom: 24px;
  width: 100%;
  padding: 0 20px;
`