import React, { useState, useRef } from "react";
import { StyledHeader } from "./styles";
import { Burger, Menu, useOnClickOutside } from "../Navigation";
import StyledLink from "../StyledLink";

export const Header = ({ home }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledHeader className="faintIn">
      <div className="nav-wrapper">
        <StyledLink to="/">
          <h3 className="brand">Eto Olei</h3>
        </StyledLink>
        <div ref={node}>
          <Menu home={home} open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>
    </StyledHeader>
  );
};
