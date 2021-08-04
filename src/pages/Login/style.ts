import styled from 'styled-components';
import { Props } from './index';

export const HelpLogin = styled.div<Props>`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  height:20px;
  margin-top:16px;
  padding: 0px 20px;
`;

export const FindUserInfo = styled.button<Props>`
  font-size:14px;
  line-height:20px;
  font-weight:400;
  color:#646464;
  border-style: none;
  background: none;
`;

export const TourAppBtn = styled.div<Props>`
  display:flex;
  justify-content: center;
  margin-top: 166px;
`;