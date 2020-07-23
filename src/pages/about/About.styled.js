import styled from 'styled-components';

export const StyledAbout = styled.section`
  scroll-snap-align: none;
  scroll-snap-stop: normal;
  height: auto;
  color: ${({ theme }) => theme.lightColor};
  margin-top: 7rem;

  .container{
    max-width: ${({ theme }) => theme.contentMaxWidth};
    margin: auto;
    width: 100%;

    & > div{
      display: flex;
      margin-bottom: 2rem;
    }

    article{
      display: grid;

      grid-template-columns: repeat(2, 1fr);
      row-gap: 2rem;
      margin: auto;

      @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
        grid-template-columns: 1fr;
      }

      & > div{
        :first-child{
          @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
            display:flex;
            justify-content: center;
            width: 100%;
            margin-bottom: 5rem;
          }
        }

        :last-child{
          @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
            width: 100%;
          }
          p{
            margin-bottom: 1rem;
          }
          div{
            ul{
              margin-bottom: 2.5rem;
              min-width: 60%;
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
  }
`