import styled from 'styled-components';
import { Props } from './index';

export const Wrap = styled.div<Props>`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  padding: 18px 20px 0px 20px;
  margin-top:62px;
`;

export const Form = styled.form<Props>`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  width:100%;
`;