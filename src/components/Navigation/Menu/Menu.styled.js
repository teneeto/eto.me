import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ff8900 0% 0% no-repeat padding-box;
  box-shadow: -3px 0px 20px #ff89004d;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(110%)")};
  transition: transform 0.3s ease-in-out;
  width: 35%;
  padding: 5rem 3rem 3rem 3rem;
  font-size: calc(1rem + 1.5vmin);
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.lgTablet}) {
    width: 60%;
  }
  @media (max-width: ${({ theme }) => theme.lgMobile}) {
    width: 100%;
  }

  & > div {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
    }

    h3 {
      font-size: calc(0.5rem + 1.5vmin);
      font-weight: 550;
    }

    :first-child {
      ul {
        li {
          position: relative;
          margin-bottom: 2rem;
          cursor: pointer;
          width: fit-content;

          span {
            position: absolute;
            bottom: 5%;
            width: 0;
            height: 25%;
            background-color: ${({ theme }) => theme.primaryColor};
          }

          :hover {
            span {
              width: 100%;
              transition: all 0.3s linear;
            }
          }
        }
      }

      div {
        position: relative;
        width: fit-content;

        span {
          position: absolute;
          bottom: 5%;
          width: 0;
          height: 25%;
          background-color: ${({ theme }) => theme.primaryColor};
        }
        :hover {
          span {
            width: 100%;
            transition: all 0.3s linear;
          }
        }
      }
    }

    :last-child {
      ul {
        display: flex;

        li:not(:last-of-type) {
          width: fit-content;
          margin-right: 1.5rem;
        }

        li {
          position: relative;
          span {
            position: absolute;
            bottom: 5%;
            width: 0;
            height: 25%;
            background-color: ${({ theme }) => theme.primaryColor};
          }
          :hover {
            span {
              width: 100%;
              transition: all 0.3s linear;
            }
          }
        }
      }
    }
  }
`;
