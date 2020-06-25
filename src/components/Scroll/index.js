import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll'

import { StyledScroll } from './styles';
import { getContext } from '../../store';
import { SET_SECTIONS } from '../../store/actions'

export const Scroll = ({ visible }) => {
  const [, dispatch] = useContext(getContext)
  const handlePitchslate = () => {
    return dispatch({
      type: SET_SECTIONS, payload: {
        home: true, projects: false, about: false, contact: false, footer: false,
      }
    })
  }

  const handleProjects = () => {
    return dispatch({
      type: SET_SECTIONS, payload: {
        home: false, projects: true, about: false, contact: false, footer: false,
      }
    })
  }

  const handleAbout = () => {
    return dispatch({
      type: SET_SECTIONS, payload: {
        home: false, projects: false, about: true, contact: false, footer: false,
      }
    })
  }

  const handleContacts = () => {
    return dispatch({
      type: SET_SECTIONS, payload: {
        home: false, projects: false, about: false, contact: true, footer: false,
      }
    })
  }

  const handleFooter = () => {
    return dispatch({
      type: SET_SECTIONS, payload: {
        home: false, projects: false, about: false, contact: false, footer: true,
      }
    })
  }

  return (
    <StyledScroll visible={visible}>
      <ScrollLink to='pitchslate' spy={true} smooth={true} duration={5} offset={-400} onSetActive={handlePitchslate} >
        <div className='pitchslate'></div>
      </ScrollLink>

      <ScrollLink to='about' spy={true} smooth={true} duration={5} offset={-400} onSetActive={handleAbout} >
        <div className='about'></div>
      </ScrollLink>

      <ScrollLink to='projects' spy={true} smooth={true} duration={5} offset={-400} onSetActive={handleProjects} >
        <div className='projects'></div>
      </ScrollLink>

      <ScrollLink to='contact' spy={true} smooth={true} duration={5} offset={-400} onSetActive={handleContacts}>
        <div className='contact'></div>
      </ScrollLink>

      <ScrollLink to='footer' spy={true} smooth={true} duration={5} offset={-400} onSetActive={handleFooter}>
        <div className='footer'></div>
      </ScrollLink>
    </StyledScroll>
  )
}