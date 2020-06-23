import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FF8900 0% 0% no-repeat padding-box;
  box-shadow: -3px 0px 20px #FF89004D;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(110%)'};
  transition: transform 0.3s ease-in-out;
  width: 35%;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;