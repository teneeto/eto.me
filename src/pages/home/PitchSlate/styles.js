import styled from 'styled-components';
const ketchup = require('../../../assets/ketchup.png');

export const StyledPitchSlate = styled.section`
  background: ${({ theme }) => theme.primaryColor};
  
  .container{
    display: flex;
    align-items:center;
    border: 1px solid ${({ theme }) => theme.lightColor};
    height: 100%;

    .intro{
      width: 50%;
      border: 1px solid ${({ theme }) => theme.lightColor};
      color: ${({ theme }) => theme.lightColor};

      h2{
        font-size: 54px;
      }
      h2:nth-of-type(2){
        color: #FF8900;
      }
    }
    .picture{
      position: relative;
      width: 50%;
      height: 34vmax;
      border: 1px solid ${({ theme }) => theme.lightColor};

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
      .ketchup{
        display: block;
        position: absolute;
        width: 30vmax;
        height: 35vmax;
        /* margin-top: -2.435em; */
        background-size: cover;
        background-position-x: center;
        background-image: url(${ketchup});
        /* margin:0.5rem 0 0 0.5rem; */
        margin:0.55rem 0 0 3rem;
        z-index: 40;
      }
      .pattern1{
        position: absolute;
        /* margin-left: -0.9rem; */
        margin-top: -2.5rem;
        height: 10rem;
        width: auto;


      }
      .pattern2{
        position: absolute;
        /* margin: 21.25rem 0  0 27.25rem; */
        margin: 21.85vw 0  0 28.75vw;
        top:10;
        left:26;
        height: 15rem;
        width: auto; 
      }
    }
  }
`