import styled from "styled-components";

export const Container = styled.div<any>`
  width: 100%;
  padding: 0 20px;
`;

export const LogoFigure = styled.figure<any>`
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 118px;
`
export const LogoImage = styled.img<any>`
  height: 100%;
  object-fit: contain;
`

export const LookAroundButtonContainer = styled.div<any>`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`