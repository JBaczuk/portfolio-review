import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .scroll-top {
    height: 60px;
    width: 60px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    border-radius: 50px;
    background-color: #273043;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.9);
    visibility: visible;
    svg {
      width: 100%;
      pointer-event: none;
      box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.336);
      border-radius: 50px;
      transition: 0.5s ease-in-out;
      &:hover {
        color: #F02D3A;
      }
    }
    &:hover {
      transform: scale(1);
      transition: 0.5s ease-in-out;
      font-weight: 500;
      opacity: 1;
      cursor: pointer;
    }
  }

  .scroll-top.active {
    visibility: visible;
`;

export default GlobalStyles;