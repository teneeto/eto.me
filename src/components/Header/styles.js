import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0; /* initialy nothing */
  padding: 1.5rem  4.75vw 0  4.75vw ; /* initialy 0.35rem 4.75vw */
  width: 100%;
  z-index:999;
  background-color:${({ theme }) => theme.primaryColor};
  
  
  h1{
    color: ${({ theme }) => theme.accentColor}; 
  }
`