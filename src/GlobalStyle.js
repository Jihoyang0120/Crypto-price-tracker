import { createGlobalStyle } from "styled-components";

import NanumBarunGothic from "./NanumBarunGothic.woff";
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #1a1a1c;
  color: #fff;
}

@font-face {
    font-family: "NanumBarunGothic";
    src: local("NanumBarunGothic"),
    url(${NanumBarunGothic}) format('woff');
    font-weight: 300;
    font-style: normal;
}

`;
export default GlobalStyle;
