import styled from "styled-components";

const styles = {
    TutorialLayout: styled.div`
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 68px 20px 24px;
    `,
    TextArea: styled.div`
      h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
      }
      p {
        color: #646464;
        line-height: 24px;
      }
    `,
    ImageArea: styled.div`
      width: 100%;
      height: 370px;
      overflow: hidden;
      text-align: center;
      margin-top: auto;
      img {
        display: inline-block;
        width: 290px;
        height: auto;
      }
    `,
};

export default styles;