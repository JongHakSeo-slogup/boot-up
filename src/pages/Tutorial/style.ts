import styled from 'styled-components';
import { Props } from './index';

export const TitleBox = styled.div<Props>`
  margin-top:24px;
  padding: 0px 20px;
`;

export const Title = styled.h1<Props>`
  margin: 0px;
  font-weight:700;
  font-size: 24px;
  line-height:36px;
  color: #19191E;
  text-align:left;
`;

export const Explain = styled.div<Props>`
  margin-top: 16px;
  font-size:16px;
  line-height:24px;
  color: #646464;
  max-width:220px;
  text-align:left;
`;

export const DotQueue = styled.div<Props>`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:34px;
  height:6px;
  margin:auto;
`;

export const Dots = styled.span<Props>`
  background:#D2D2D2;
  width:6px;
  height:100%;
  border-radius: 50%;
`;

export const SelectedDot = styled.span<Props>`
  background:#19191E;
  width:6px;
  height:100%;
  border-radius: 50%;
`;
