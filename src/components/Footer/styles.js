import styled from 'styled-components';

export const StyledFooter = styled.section`
  display: flex;
  align-items: center;
  scroll-snap-align: ${({ home }) => home ? 'start' : 'none'};
  scroll-snap-stop: ${({ home }) => home ? 'always ' : 'normal'};
  background: ${({ theme }) => theme.PrimaryColor};
  color: #FF8900;
  font-size: calc(1rem + 1.5vmin);
  font-weight: 600;

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 85%;
    height: 60%;
    margin: auto;

    div:first-of-type{
      display: flex;

      div:nth-of-type(1){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width:45%;
        
        h3{
          font-size:calc(0.5rem + 1.5vmin);
          font-weight:550;
        }

        div:last-child{
          position: relative;
          width: fit-content;
          
          span{
              position: absolute;
              bottom:5%; 
              width: 0;
              height: 25%;
              background-color: #FF8900B3;
            }
            :hover{
              span{
                width: 100%;
                transition: all 0.3s linear;
              }
            }
        }
      }

      div:nth-of-type(2){
        width:55%;

        ul{         
          li{
            position: relative;
            margin-bottom: 2rem;
            cursor: pointer;
            width: fit-content;

            span{
              position: absolute;
              bottom:5%; 
              width: 0;
              height: 25%;
              background-color: #FF8900B3;
            }
            
            :hover{
              span{
                width: 100%;
                transition: all 0.3s linear;
              }
            }
          }
        }
      }
    }
    .copyright{
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #FF8900;
      padding: 2.5rem 0;

      div:nth-of-type(1){
        
      }
      div:nth-of-type(2){
        ul{
          display:flex;
          
          li:not(:last-of-type){
            width: fit-content;
            margin-right:1.5rem;
          }

          li{
            position: relative;
            span{
              position: absolute;
              bottom:5%; 
              width: 0;
              height: 25%;
              background-color: #FF8900B3;
            }
            :hover{
              span{
                width: 100%;
                transition: all 0.3s linear;
              }
            }
          }
        }
      }
    }
  }
`