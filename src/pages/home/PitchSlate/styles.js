import styled from 'styled-components';
const ketchup = require('../../../assets/ketchup.jpg');

export const StyledPitchSlate = styled.section`
  background: ${({ theme }) => theme.primaryColor};

  @media screen and (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1.5rem  4.75vw 0  4.75vw ;
  }

  .container{
    display: flex;
    align-items:center;
    /* border: 1px solid ${({ theme }) => theme.lightColor}; */
    height: 100%;
    
    @media screen and (max-width: ${({ theme }) => theme.desktop}) {
      padding: 0 ;
    }
    @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
      flex-direction: column-reverse;
    }

    .intro{
      width: 50%;
      /* border: 1px solid ${({ theme }) => theme.lightColor}; */
      color: ${({ theme }) => theme.lightColor};

      @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
        width: 100%;
        text-align: center;
      }

      h1{
        font-size: 3.42rem;
        span{
          color: ${({ theme }) => theme.accentColor};
        }
        @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
          font-size: 3rem;
        }
      }
    }
    .picture{
      position: relative;
      /* width: 50%; */
      width: 28.5vmax;
      height: 33.5vmax;
      /* border: 1px solid ${({ theme }) => theme.lightColor}; */

      @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
        margin-left: -7rem;
        margin-bottom: 7rem;
      }

      div:nth-of-type(1){
        position: absolute;
        background: #F1F1F1CC 0% 0% no-repeat padding-box;
        border-radius: 10px;
        width: 28.5vmax;
        height: 33.5vmax;
        margin:0 0 0 2.4rem;
      }
      div:nth-of-type(2){
        position: absolute;
        background: #F1F1F1CC 0% 0% no-repeat padding-box;
        border-radius: 10px;
        width: 28.5vmax;
        height: 33.5vmax;
        /* margin:2.5rem 0 0 2.5rem; */
        margin:2.4rem 0 0 5rem; 
      }
      div:nth-of-type(3){
        position: absolute;
        /* background: #FF8900 0% 0% no-repeat padding-box; */
        background: ${({ theme }) => theme.primaryColor};
        opacity: 0;
        border-radius: 10px;
        width: 29vmax;
        height: 33.5vmax;
        /* margin:2.5rem 0 0 2.5rem; */
        margin:1.2rem 0 0 3.5rem;
        /* z-index: 40; */
      }
      .ketchup{
        display: block;
        position: absolute;
        /* width: 30vmax; */
        /* height: 35vmax; */
        width: 29vmax;
        height: 33.5vmax;
        /* margin-top: -2.435em; */
        background-size: cover;
        background-position-x: center;
        background-image: url(${ketchup});
        /* margin:0.5rem 0 0 0.5rem; */
        /* margin:0.55rem 0 0 3rem; */
        margin:1.2rem 0 0 3.5rem;
        border-radius: 10px;
      }
      .pattern1{
        position: absolute;
        /* margin-left: -0.9rem; */
        top: -2.35rem;
        left: -2.35rem;
        height: 10rem;
        width: auto;
      }
      .pattern2{
        position: absolute;
        /* margin: 21.25rem 0  0 27.25rem; */
        /* margin: 21.85vw 0  0 28.75vw; */
        right:-2.35rem;
        bottom:-2.35rem;
        height: 15rem;
        width: auto; 
      }

      &:hover{
        div:nth-of-type(1){
          margin:0.15rem 0 0 2.55rem;
          transition: all 0.3s linear;
        }
        div:nth-of-type(2){
          margin:2.25rem 0 0 4.85rem; 
          transition: all 0.3s linear;
        }
        div:nth-of-type(3){
          opacity:0.2; 
          transition: all 0.3s linear;
        }
        .pattern1{
          top: -2rem;
          left: -2rem;
          transition: all 0.3s linear;
        }
        .pattern2{
          /* margin: 21.85vw 0  0 28.75vw; */
          /* margin: 21vw 0  0 28vw; */
          bottom: -2rem;
          right: -2rem;
          transition: all 0.3s linear;
        }
      }
    }
  }
`