import styled from "styled-components";

import ketchup from "../../assets/eto_at_sea.jpg";
export const StyledImageFrame = styled.div`
  position: relative;
  width: 28.5vmax;
  height: 33.5vmax;
  @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
    width: 100%;
    height: 20rem;
  }
  & > div {
    position: absolute;
    background: #130221;
    border: 1px solid ${({ theme }) => theme.accentColor};
    border-radius: 10px;
    width: 28.5vmax;
    height: 33.5vmax;
    @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
      width: 93%;
      height: 100%;
    }
    :first-child {
    }
    :nth-of-type(2) {
      margin: 0.2rem 0 0 0.2rem;
    }
    :nth-of-type(3) {
      margin: 0.4rem 0 0 0.4rem;
    }
    :nth-of-type(4) {
      margin: 0.6rem 0 0 0.6rem;
    }
    :nth-of-type(5) {
      margin: 0.8rem 0 0 0.8rem;
    }
    :nth-of-type(6) {
      margin: 1rem 0 0 1rem;
      background-size: cover;
      background-position-x: center;
      background-image: url(${ketchup});
      box-shadow: 0px 3px 10px #00000029;
      border: none;
    }
  }
`;
