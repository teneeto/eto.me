// global.js
import { createGlobalStyle, keyframes } from 'styled-components';
import './fonts.css';

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

  *{
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  html, body{
    /* Enable Safari touch scrolling physics which is needed for scroll snap */
    -webkit-overflow-scrolling: touch;

  	scroll-snap-type: y mandatory;
    
    /* Hide scrollbar for IE and Edge */
    -ms-overflow-style: none;

    scroll-behavior:smooth;
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  html::-webkit-scrollbar {
    display: none;
  }

  body{
    background: ${({ theme }) => theme.primaryColor};
    font-family: 'PoppinsRegular', sans-serif;
  }

  h1, h2, h4, h5, h6{
    font-family: 'PoppinsBold', sans-serif;
  }
  h3{
    font-family: 'PoppinsSemiBold', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p, div,nav, article, section{
    margin: 0;
    padding: 0;
  }

  h1{
    font-size: ${({ theme }) => theme.fsIntro};
    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 3.25rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgTablet}) {
      font-size: 2.65rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mdTablet}) {
      font-size: 2.55rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.smTablet}) {
      font-size: 2.35rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
      font-size: 2.65rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mdMobile}) {
      font-size: 2.15rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.smMobile}) {
      font-size: 1.8rem;
    }
  }
  h2{
    font-size: ${({ theme }) => theme.fsHeading};
    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 2.85rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgTablet}) {
      font-size: 2.75rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mdTablet}) {
      font-size: 2.65rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.smTablet}) {
      font-size: 2.55rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
      font-size: 2.35rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mdMobile}) {
      font-size: 2.15rem;
    }
  }
  h3{
    font-size: ${({ theme }) => theme.fsSubheading};
    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 1.8rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgTablet}) {
      font-size: 1.775rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mdTablet}) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.smTablet}) {
      font-size: 1.675rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mdMobile}) {
      font-size: 1.575rem;
    }
  }
  p{
    font-size: ${({ theme }) => theme.fsText};
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {

    }
  }
  .article-heading{
    font-size: ${({ theme }) => theme.fsArticleHeading};
  }
  .lg-text{
    font-size: ${({ theme }) => theme.fsText};
  }
  .md-text{
    font-size: ${({ theme }) => theme.fsMdText};
  }
  .sm-text{
    font-size: ${({ theme }) => theme.fsSmText};
  }
  .brand{
    font-family: 'AvenirNextHeavy', sans-serif;
    color:${({ theme }) => theme.accentColor}
  }
  
  section {
    max-width: ${({ theme }) => theme.bodyMaxWidth};
    margin: 0 auto;
    padding: 0 1.25rem;
    height: 100vh;
    width: 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    /* overflow: hidden; */

    @media screen and (max-width: ${({ theme }) => theme.lgTablet}) {
      scroll-snap-align: none;
      scroll-snap-stop: normal;
      height: auto;
      margin: 10rem 0;
    }
    @media screen and (max-height: 690px) {
      scroll-snap-align: none;
      scroll-snap-stop: normal;
      height: auto;
      margin: 10rem 0;
    }
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
      margin: 7rem 0;
      padding: 0 0.875rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.smMobile}) {
      padding: 0 0.5rem;
    }
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
        border: 1px solid ${({ theme }) => theme.accentColor};
        color: ${({ theme }) => theme.accentColor};
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
