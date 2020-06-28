// global.js
import { createGlobalStyle } from 'styled-components';
import PoppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import PoppinsBold from '../assets/fonts/Poppins/Poppins-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'),local('Poppins-Regular'),
        url(${PoppinsRegular});
  }

  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'),local('Poppins-SemiBold'),
        url(${PoppinsSemiBold});
  }

  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    src: local('Poppins Bold'),local('Poppins-Bold'),
        url(${PoppinsBold});
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
  }
`;
