import React, { useState, useRef } from 'react';
import { StyledHeader } from './styles';
import { Burger, Menu, useOnClickOutside } from '../Navigation';

export const Header = ({ visible }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledHeader visible={visible} >
      <h1>Eto Olei</h1>
      <div ref={node}>
        <Menu open={open} setOpen={setOpen} />
        <Burger visible={visible} open={open} setOpen={setOpen} />
      </div>
    </StyledHeader>
  )
}