import React from "react";
import styled from "styled-components";

export const Image = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};
const Wrapper = styled.div`
  position: relative;
  height: 26.5rem;
  min-width: 60%;
  /* background-color: #C9C9C9; */
  background-size: cover;
  background-position-x: center;
  background-image: ${({ image }) => `url(${image})`};
  @media screen and (max-width: ${({ theme }) => theme.lgMobile}) {
    width: 100%;
    height: 20rem;
    background-size: 100%;
    background-position: top center;
    background-repeat: no-repeat;
  }
`;
