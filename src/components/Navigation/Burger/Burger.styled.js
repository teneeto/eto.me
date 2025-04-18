// Burger.styled.js
import styled from "styled-components";
export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0 1rem 0 0;
  z-index: 10;
  box-shadow: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: none;
    div {
      background: ${({ theme, open }) =>
        open ? theme.primaryColor : theme.accentColor};
      transition: all 0.3s linear;

      :nth-child(2) {
        width: 2rem;
      }

      :nth-child(3) {
        width: 2rem;
      }
    }
  }

  div {
    width: 2rem;
    height: 0.35rem;
    border-radius: 10px;
    /* background: ${({ theme, open }) =>
      open ? theme.primaryColor : theme.lightColor}; */
    border: 2px solid
      ${({ theme, open }) => (open ? theme.primaryColor : theme.accentColor)};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      width: 1.5rem;
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ open }) => (open ? "2rem" : "1rem")};
    }
  }
`;
