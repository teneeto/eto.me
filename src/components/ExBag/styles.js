import styled from 'styled-components';

export const StyledExBag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:0;
  width: 85%;
  margin: auto;
  height: 100%;

  h2{
    font-size: 50px;
  }

  .wrapper{
    display: flex;
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
    height:60%;
    margin-top: 2rem;
    flex-wrap: wrap;
    border-radius: 10px;
    box-shadow: 0px 1px 4px #00000029;
    overflow: hidden;
    
    .box1{
      background: #C9C9C9;
      flex: 3 2 auto;
    }
    .box2{
      background: #FFFFFF;
      flex: 2 1 auto;
    }
  }
`