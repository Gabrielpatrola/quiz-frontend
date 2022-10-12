import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGiImg from "../../images/quiz.jpeg";

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
    font-family: "Poppins", sans-serif;
    background: #87f1ff;
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
    margin: 20px 5px;
    padding: 0 45px;
    text-decoration: none;
    color: inherit;
  }
  .start {
    max-width: 200px;
  }
`;

export const GenericWrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
  button {
    margin-left: 5px;
  }
  form {
    width:1100px;
  }
  label {
    display: inline-block;
    width: 110px;
    font-family: "Poppins", sans-serif;
  }
  input{
    width: 50%;
    height: 56px;
    position: relative;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: white;
    color: #282828;
    outline: none;
    margin: 5px;
    box-shadow: 0px 4px 20px 0px transparent;
  }
  div {
    margin-top 5px;
  }
`;
