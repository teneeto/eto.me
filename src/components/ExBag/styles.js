import styled from 'styled-components';

export const StyledExBag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:0;
  width: 85%;
  margin: auto;
  height: 100%;
  color: ${({ theme }) => theme.lightColor};

  @media screen and (max-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
  }

  h2{
    margin-bottom: 2rem;
  }

  .wrapper{
    display: flex;
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
    height:50%;
    margin-top: 2rem;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 0px 1px 4px #00000029;
    
    @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
      flex-direction: column;
    }

    & > div {
      :first-child{
        display: flex;
        align-items: center;
        flex:  64%;
        @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
          margin-bottom: 7rem;
        }
        
        & > div{
          position: relative;
          width: 26vmin;
          height: 22vmax;

          @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
            width: 26vmax;
          }
          & > div{
          position: absolute;
          background-color: ${({ theme }) => theme.lightGreyColor};
          box-shadow: 0px 2px 4px #00000029;
          border-radius: 10px;
          width: 26vmax;
          height: 22vmax;
          :first-child{
            
          }
          :nth-of-type(2){
            left: 80%;
            top: -15%;
          }
          :last-child{
            left: 40%;
            bottom: -15%;
          }
        }
        }
      }
      :last-child{
        display: flex;
        align-items:center;
        flex: 36%;
        padding-left: 1.5rem;
        & > div{
          button{
            margin-top: 1rem;
            /* width: 50%; */
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            @media screen and (max-width: ${({ theme }) => theme.miniTablet}) {
              width: 100%;
            }
          }
        }
      }
    }
  }
`