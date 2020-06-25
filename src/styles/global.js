// global.js
import { createGlobalStyle } from 'styled-components';
import Poppins from '../assets/fonts/Poppins/Poppins-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    src: local('Poppins'),
        url(${Poppins});
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
