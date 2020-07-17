import styled from 'styled-components';

export const StyledProjects = styled.section`
  /* display: flex; */
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1.5rem  4.75vw 0  4.75vw ;
  }
  .container{
    display: flex;
    align-items:center;
    /* border: 1px solid ${({ theme }) => theme.primaryColor}; */
    height: 100%;
  }
`