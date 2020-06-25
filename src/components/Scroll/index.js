import React from 'react';
import { Link as ScrollLink } from 'react-scroll'

import { StyledScroll } from './styles';

export const Scroll = ({ visible }) => {
  const handleActive = () => {

  }

  return (
    <StyledScroll visible={visible}>
      <ScrollLink to='pitchslate' spy={true} smooth={true} duration={5} offset={-60}  >
        <div className='pitchslate'></div>
      </ScrollLink>

      <ScrollLink to='projects' spy={true} smooth={true} duration={5} offset={-60} >
        <div className='projects'></div>
      </ScrollLink>

      <ScrollLink to='about' spy={true} smooth={true} duration={5} offset={-60} onSetActive={handleActive} >
        <div className='about'></div>
      </ScrollLink>

      <ScrollLink to='contact' spy={true} smooth={true} duration={5} offset={-60} >
        <div className='contact'></div>
      </ScrollLink>

      <ScrollLink to='footer' spy={true} smooth={true} duration={5} offset={-60} >
        <div className='footer'></div>
      </ScrollLink>
    </StyledScroll>
  )
}