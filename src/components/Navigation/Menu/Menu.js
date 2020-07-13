// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

import { StyledLink } from '../../../components';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open, home }) => {
  return (
    <StyledMenu open={open}>

      <div>
        <ul>
          {home && <li>
            <ScrollLink to='pitchslate' spy={true} smooth={true} duration={5} offset={-400} >
              <span></span>
                  Home
            </ScrollLink>
          </li>}

          {!home && <li>
            <StyledLink to='/' >
              <span></span>
                  Home
            </StyledLink>
          </li>}

          <li>
            <StyledLink to='/about' >
              <span></span>
                  About
               </StyledLink>
          </li>

          <li>
            <StyledLink to='/projects'>
              <span></span>
                  Projects
                </StyledLink>
          </li>
        </ul>
        <div>
          <h3>Contact Me</h3>
          <div>
            <span></span>
            <a href='mailto:mail@eto.me'>mail@eto.me</a>
          </div>
        </div>
      </div>


      <div>
        <h3>Social Media</h3>
        <ul>
          <li><span></span> <a href='https://twitter.com/teneetoe' target='_blank' rel='noopener noreferrer'>TW</a></li>
          <li><span></span> <a href='https://github.com/teneeto' target='_blank' rel='noopener noreferrer'>GH</a></li>
          <li><span></span> <a href='https://linkedin.com/in/teneeto' target='_blank' rel='noopener noreferrer'>LN</a></li>
          <li><span></span> <a href='https://instagram.com/teneeto' target='_blank' rel='noopener noreferrer'>IG</a></li>
        </ul>
      </div>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;