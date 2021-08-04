import styled from "styled-components";
import {Link} from "react-router-dom";

const styles = {
    LoginLayout: styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 118px 20px 26px;
    `,
    LogoArea: styled.div`
      text-align: center;
      margin-bottom: 50px;
      img {
        display: inline-block;
        width: 144px;
        height: auto;
        text-align: center; 
      }
    `,
    LinkArea: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 16px;
      
      a {
        font-size: 14px;
      }
    `,
    FindArea: styled.div`
      display: flex;
      align-items: center;
      
      a {
        color: #646464;
      }
      
      a:not(:last-child) {
        position: relative;
        margin-right: 18px;
        
        &::before {
          content: '';
          position: absolute;
          right: -9px;
          top: 0;
          display: block;
          width: 1px;
          height: 100%;
          background: #646464;
        }
      }
    `,
    JoinLink: styled.a`
        text-decoration: underline;
    `,
    ButtonWrapper: styled.div`
        text-align: center;
        margin-top: auto;
    `,
    AroundButton: styled(Link)`
        cursor: pointer;
        text-decoration: underline;
        font-size: 14px;
    `,
}

export default styles;