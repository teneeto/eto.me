import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
const StyledContainer = styled.main`
  /* Enable Safari touch scrolling physics which is needed for scroll snap */
  -webkit-overflow-scrolling: touch;

  /* suppress scroll anchoring to see the effect */
  scroll-snap-type: y mandatory;

  overflow-y: scroll;
  height: 100vh;
`;
