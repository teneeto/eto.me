import styled from 'styled-components';

export const StyledProjects = styled.section`
  display: flex;
  align-items:center;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0;
    max-width: ${({ theme }) => theme.contentMaxWidth};
    margin: auto;
    width: 100%;
    color: ${({ theme }) => theme.lightColor};

    h2{
      margin-bottom: 1.5rem;
    }

    .wrapper{
      display: grid;
      grid-template-columns:64% 34%;
      column-gap: 1.5rem;
      row-gap: 1.5rem;
      border-radius: 10px;
      box-shadow: 0px 1px 4px #00000029;

      @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
        grid-template-columns:1fr;
      }

      & > div {
        :first-child{
          & > img{
            max-width: 700px;
            width: 100%;
            height:auto;
          }
        }
        :last-child{
          display: flex;
          align-items:center;
          /* padding-left: 1.5rem; */
          & > div{
            button{
              margin-top: 1rem;
              /* width: 50%; */
              padding-left: 1.5rem;
              padding-right: 1.5rem;
              @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

`