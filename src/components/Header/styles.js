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
    max-width: 1322px;
    margin: auto;
    padding: 1.5rem  1.25rem;
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
      padding: 1.5rem 0.875rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.smMobile}) {
      padding: 1.5rem 0.5rem;
    }
  }
`