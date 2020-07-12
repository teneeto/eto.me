import React from 'react';
import { ReactComponent as Pattern1 } from '../../../assets/Pattern1.svg';
import { ReactComponent as Pattern2 } from '../../../assets/Pattern2.svg';
import { StyledPitchSlate } from './styles';

export const PitchSlate = () => {
  return (
    <StyledPitchSlate>
      <div className='container'>
        <div className='intro'>
          <h1>Hello I'm Eto Olei, <br /><span>I build for the Web</span></h1>
          <p>
            I am a Software developer, based in Lagos. i spend time building amazing websites, applications and everything in between
          </p>
        </div>
        <div className='picture'>
          <div></div>
          <Pattern1 className='pattern1' data-shape />
          <div></div>
          <Pattern2 className='pattern2' data-shape />
          <span className='ketchup' aria-label='Photo of Eto' role='img' />
          <div></div>
        </div>
      </div>
    </StyledPitchSlate>
  )
}