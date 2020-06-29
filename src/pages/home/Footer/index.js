import React from 'react';
import { Link as ScrollLink } from 'react-scroll'

import { StyledFooter } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className='wrapper'>
        <div className='contact'>
          <div>
            <h3>Contact Me</h3>
            <div>
              <span></span>
              <a href='mailto:mail@eto.me'>mail@eto.me</a>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <ScrollLink to='pitchslate' spy={true} smooth={true} duration={5} offset={-400} >
                  <span></span>
                  Home
                </ScrollLink>
              </li>

              <li>
                <ScrollLink to='about' spy={true} smooth={true} duration={5} offset={-400} >
                  <span></span>
                  About
               </ScrollLink>
              </li>

              <li>
                <ScrollLink to='projects' spy={true} smooth={true} duration={5} offset={-400} >
                  <span></span>
                  Projects
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          <div>
            © Etotaziba Olei 2020
          </div>
          <div>
            <ul>
              <li><span></span> <a href='https://twitter.com/teneetoe' target='_blank' rel='noopener noreferrer'>TW</a></li>
              <li><span></span> <a href='https://github.com/teneeto' target='_blank' rel='noopener noreferrer'>GH</a></li>
              <li><span></span> <a href='https://linkedin.com/in/teneeto' target='_blank' rel='noopener noreferrer'>LN</a></li>
              <li><span></span> <a href='https://instagram.com/teneeto' target='_blank' rel='noopener noreferrer'>IG</a></li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter >
  )
}