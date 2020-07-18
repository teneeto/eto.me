import styled from 'styled-components';

export const StyledAbout = styled.section`
  scroll-snap-align: none;
  scroll-snap-stop: normal;
  height: auto;
  color: ${({ theme }) => theme.lightColor};
  margin-top: 5rem;

  & > div{
    width: 85%;
    margin: auto;
    margin-bottom: 2rem;
  }

  article{
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin: auto;
    margin-bottom: 8rem;

    @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
      flex-direction: column;
      align-items: center;
    }
    & > div{
      :first-child{
        width: 50%;
        @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
          display:flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 5rem;
        }
      }

      :last-child{
        width: 50%;
        @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
          width: 100%;
        }
        p{
          margin-bottom: 1.5rem;
        }
        div{
          
          ul{
            width: 60%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            row-gap: 1rem;
            list-style: none;
            padding: 0;
            li:not(:last-of-type){
              
              margin-right: 1rem;
            }
            li{
              display: flex;
              align-items: center;
              div{
                height: 0.75rem;
                width: 0.75rem;
                border-radius: 1rem;
                border: 3px solid ${({ theme }) => theme.accentColor};
                margin-right: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
`