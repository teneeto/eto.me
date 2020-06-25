import styled from 'styled-components';

export const StyledProjects = styled.section`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};

  .container{
    display: flex;
    align-items:center;
    /* border: 1px solid ${({ theme }) => theme.primaryColor}; */
    height: 100%;
  }
`