import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGiImg from "./images/quiz.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height:100%
}
body{
    background-image:url(${BGiImg});
    background-size:cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
}
*{
    box-sizing:border-box
}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: fascinate Inline, Hattenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    font-size: 70px;
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
