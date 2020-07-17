// global.js
import { createGlobalStyle, keyframes } from 'styled-components';
import PoppinsRegular from '../assets/fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins/Poppins-SemiBold.ttf';

const faintIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const toTop1 = keyframes`
	from {
		opacity: 0;
		transform: translateY(0.5rem);
	}

	to {
		opacity: 1;
		transform: translateY(0rem);
	}
`

const toTop2 = keyframes`
	from {
		opacity: 0;
		transform: translateY(1rem);
	}

	to {
		opacity: 1;
		transform: translateY(0rem);
	}
`

const toTop3 = keyframes`
	from {
		opacity: 0;
		transform: translateY(1.5rem);
	}

	to {
		opacity: 1;
		transform: translateY(0rem);
	}
`

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

    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
        font-size: 80%; 
    }
    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        font-size: 60%; 
    }
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
    /* overflow: hidden; */

    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
      padding: 1.5rem 0 ;
      scroll-snap-align: none;
      scroll-snap-stop: normal;
      height: auto;
      margin-top: 15rem;
    }
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

  .faintIn{
    animation: 0.5s ${faintIn} forwards;
  }

  .toTop1{
    animation: 0.75s ${toTop1} forwards;
  }
  .toTop2{
    animation: 1s ${toTop2} forwards;
  }
  .toTop3{
    animation: 1.25s ${toTop3} forwards;
  }
  .toTop4{
    animation: 1.5s ${toTop3} forwards;
  }
`;
