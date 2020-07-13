import React, { useState, useRef } from 'react';
import { StyledHeader } from './styles';
import { Burger, Menu, useOnClickOutside } from '../Navigation';

export const Header = ({ home }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledHeader >
      <h1>Eto Olei</h1>
      <div ref={node}>
        <Menu home={home} open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  )
}