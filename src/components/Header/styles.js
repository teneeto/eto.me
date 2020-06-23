import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 1.5rem 4.75rem ;
  width: 100%;
  z-index:999;
  
  
  h1{
    color: ${({ theme }) => theme.lightColor};
  }
`