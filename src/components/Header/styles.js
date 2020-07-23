import styled from 'styled-components';

export const StyledHeader = styled.nav`
  position: fixed;
  top: 0; 
  width: 100%;
  z-index:99;
  background-color:${({ theme }) => theme.primaryColor};

  .nav-wrapper{
    display: flex;
    justify-content: space-between;
    max-width: 1312px;
    margin: auto;
    padding: 1.5rem  0.5rem;
  }
`