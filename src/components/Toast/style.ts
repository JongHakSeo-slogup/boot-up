import styled, {keyframes} from "styled-components";

const boxFadeIn = keyframes`
  0% {
    opacity: 0;
    top: 50px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
`

const styles = {
    ToastWrapper: styled.div`
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center; 
      justify-content: center;
      width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    `,
    ToastLayout: styled.div`
      position: relative;
      width: 320px;
      padding: 24px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 4px 4px 40px rgba(25, 25, 30, 0.12);
      animation: ${boxFadeIn} 0.5s;
      p {
        color: #646464;
        line-height: 24px;
        margin-bottom: 32px;
      }
    `,
};

export default styles;