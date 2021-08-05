import styled, {css} from "styled-components";
import {InputMessageProps} from "./index";

interface inputProps {
    message: InputMessageProps,
};

const styles = {
    InputLayout: styled.div<inputProps>`
      margin-bottom: 22px;  
      input {
        width: 100%;
        padding: 12px 0;
        ${({message}) => {
          if (message) {
            switch (message.type) {
              case "pass":
                return css`border-bottom: 1px solid #2e2e30`;
              case "error":
                return css`border-bottom: 1px solid #e60000`;
              default :
                return css`border-bottom: 1px solid #efefef`;
            }
          }
        }}
      }
      ${({message}) => {
          if(message.type !== 'error') return css`
            input:focus {
              border-bottom: 1px solid #2e2e30;
            }
          `
      }}
      label {
        font-size: 12px;
      }
      
      p {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-top: 12px;
        img {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 5px;
        }
        ${({message}) => {
          if (message) {
            switch (message.type) {
              case "pass":
                return css`
                  color: #2e2e30;
                `;
              case "error":
                return css`
                  color: #e60000;
                `;
              default :
                return css`
                  color: #2e2e30;
                `;
            }
          }
        }}
      }
    `,
};

export default styles;