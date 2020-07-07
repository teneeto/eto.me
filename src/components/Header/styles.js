import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 0.35rem 4.75vw ;
  width: 100%;
  z-index:999;
  
  
  h1{
    color: ${({ theme }) => theme.accentColor};
  }
`