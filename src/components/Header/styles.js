import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  position: fixed;
  padding: 1.5rem 4.75rem ;
  
  h1{
    color: ${({ theme }) => theme.lightColor};
  }
`