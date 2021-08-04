import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const bodyStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  height: 100%;
  color: #262626;
  background-color: white;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-overflow-scrolling: auto;
`;

const GlobalStyles = createGlobalStyle`
	${reset};


    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: 100;
      src: url("../fonts/NotoSansKR-Light.woff2") format('woff2'),
      url("../fonts/NotoSansKR-Light.woff") format('woff'),
      url("../fonts/NotoSansKR-Light.otf") format('truetype')
    }

    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: normal;
      src: url("../fonts/NotoSansKR-Regular.woff2") format('woff2'),
      url("../fonts/NotoSansKR-Regular.woff") format('woff'),
      url("../fonts/NotoSansKR-Regular.otf") format('truetype')
    }


    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: medium;
      src: url("../fonts/NotoSansKR-Medium.woff2") format('woff2'),
      url("../fonts/NotoSansKR-Medium.woff") format('woff'),
      url("../fonts/NotoSansKR-Medium.otf") format('truetype')
    }

    @font-face {
      font-family: 'Noto Sans CJK KR';
      font-style: normal;
      font-weight: bold;
      src: url("../fonts/NotoSansKR-Black.woff2") format('woff2'),
      url("../fonts/NotoSansKR-Black.woff") format('woff'),
      url("../fonts/NotoSansKR-Black.otf") format('truetype')
    }    
    
html,body{
  width: 100%;
}


* {
  box-sizing: border-box;
}
input,
button {
  background-color: transparent;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 0;
}
input::-ms-clear {
  display: none;
  height: 0;
  width: 0;
}

input:checked[type="checkbox"] {
  background-color: #fff;
  -webkit-appearance: checkbox;
}

h1,
h2,
h3,
h4,
h5,
h6 {
}
ol,
ul,
li {
  list-style: none;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}

html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  cursor: pointer;
  text-decoration: none;
  :visited{
    color: inherit;
  }
}
a:-webkit-any-link {
  color: inherit;
}

body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  ${bodyStyle};
  height:100vh;
}

`;



export const Container = styled.section<any>`
  width:360px;
  height:676px;
  border: 1px solid black;
  margin: auto;
`;


export default GlobalStyles;
