// global.js
import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'),local('Poppins-Regular'),
        url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'),local('Poppins-SemiBold'),
        url(${PoppinsSemiBold}) format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  html, body{
    /* Enable Safari touch scrolling physics which is needed for scroll snap */
    -webkit-overflow-scrolling: touch;

  	scroll-snap-type: y mandatory;
    
    /* Hide scrollbar for IE and Edge */
    -ms-overflow-style: none;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  html::-webkit-scrollbar {
    display: none;
  }

  body{
    background: ${({ theme }) => theme.primaryColor};
    font-family: 'Poppins', sans-serif;
    /* font-size: calc(10px + 1vmin); */
  }

  h1, h2, h3, h4, h5, h6, p, div, article, section{
    margin: 0;
    padding: 0;
  }

  section {
    padding: 1.5rem 4.75vw ;
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    overflow: hidden;
  }

  p{
    font-size: 1.15rem;
    color: ${({ theme }) => theme.lightColor};
    opacity: 0.7;
  }
  h2{
    font-size: 3.125rem;
  }
  input, button{
    border-radius: 5px;
  }

  button, input[type='submit']{
    box-shadow: 0px 3px 10px #FF8900A3;
    color: ${({ theme }) => theme.lightColor};
    border: none;
    padding: 0.8rem;
    background: linear-gradient(to right, #FF8900  50%, transparent 50%);
    background-size: 200% 100%;
    cursor: pointer;

      :hover{
        box-shadow: none;
        border: 2px solid ${({ theme }) => theme.greyColor};
        background-position: right bottom;
        transition: all 300ms linear;
      } 
  }
`;
