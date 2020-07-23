import styled from 'styled-components';
const ketchup = require('../../../assets/ketchup.jpg');
const pattern1 = require('../../../assets/Pattern1.svg');
const pattern2 = require('../../../assets/Pattern2.svg');

export const StyledPitchSlate = styled.section`
display: flex;
align-items: center;
  .container{
    display: grid;
    align-items: center;
    /* grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr)); */
    grid-template-columns: 1fr 1fr;
    row-gap: 2.5rem;
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
        grid-template-columns:1fr;
    }
   

    .intro{
      color: ${({ theme }) => theme.lightColor};
      @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
          text-align: center;
        }
      h1{
        span{
          color: ${({ theme }) => theme.accentColor};
        }
      }
    }
    
    .picture-wrapper{
        display: flex;
        @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
          justify-content: center;
        }

      .picture{
        position: relative;
        width: 29vmax;
        height: 33.5vmax;
        margin-top: -2.35rem;

        @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
          margin: 0 0 0 -7rem;
        }

        div, span, .ketchup,.pattern1,.pattern2{
          position: absolute;
        }

        div,.ketchup{
          border-radius: 10px;
          height: 33.5vmax;
        }

        & > div{
          background: #F1F1F1CC 0% 0% no-repeat padding-box;
          width: 28.5vmax;
          
          :nth-of-type(1){
            margin:0 0 0 2.4rem;
            @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
              margin:0.4rem 0 0 2.8rem;
            }
          }

          :nth-of-type(2){
            margin:2.4rem 0 0 5rem; 
            @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
              margin:1.9rem 0 0 4.4rem;
            }
          }

          :nth-of-type(3){
            background: ${({ theme }) => theme.primaryColor};
            opacity: 0;
            width: 29vmax;
            margin:1.2rem 0 0 3.5rem;
          }
        }

        .ketchup{
          width: 29vmax;
          background-size: cover;
          background-position-x: center;
          background-image: url(${ketchup});
          margin:1.2rem 0 0 3.5rem;
        }

        .pattern1{
          top: -2.35rem;
          left: -2.35rem;
          width: 5vmax;
          height: 10vmax;
          background-size: cover;
          background-position-x: center;
          background-image: url(${pattern1});

          @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
            top: -1rem;
            left: -1rem;
            }
        }

        .pattern2{
          right:-1rem;
          bottom:-1rem;
          width: 7vmax;
          height: 14vmax;
          background-size: cover;
          background-position-x: center;
          background-image: url(${pattern2});
        }

        &:hover{
          div{
            transition: all 0.3s linear;
            :nth-of-type(1){
              margin:0.15rem 0 0 2.55rem;
            }

            :nth-of-type(2){
              margin:2.25rem 0 0 4.85rem; 
            }

            :nth-of-type(3){
              opacity:0.2; 
            }
          }

          .pattern1,.pattern2{
            transition: all 0.3s linear;
          }

          .pattern1{
            top: -2rem;
            left: -2rem;
          }

          .pattern2{
            bottom: -2rem;
            right: -2rem;
          }
        }
      }
    }
  }
`