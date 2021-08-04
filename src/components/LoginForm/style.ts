import styled from 'styled-components';
import { Props } from './index';

export const Wrap = styled.div<Props>`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:300px;
  padding: 18px 20px 0px 20px;
  border:1px solid black;
  margin-top:28px;
`;

export const Form = styled.form<Props>`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  width:100%;
`;