import styled from 'styled-components';

export const StyledProjects = styled.section`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
`