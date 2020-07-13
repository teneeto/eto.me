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
    
    & > div {
      :first-child{
        display: flex;
        align-items: center;
        flex: 2 1 64%;
        & > div{
          position: relative;
          width: 26vmax;
          height: 22vmax;
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
        flex: 1 2 36%;
        padding-left: 1.5rem;
        & > div{
          button{
            margin-top: 1rem;
            /* width: 50%; */
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
      }
    }
  }
`