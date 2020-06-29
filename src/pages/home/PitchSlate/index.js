import React from 'react';
import { ReactComponent as Pattern1 } from '../../../assets/Pattern1.svg';
import { ReactComponent as Pattern2 } from '../../../assets/Pattern2.svg';
import { StyledPitchSlate } from './styles';

export const PitchSlate = () => {
  return (
    <StyledPitchSlate>
      <div className='container'>
        <div className='intro'>
          <h2>Hello I'm Eto Olei,</h2>
          <h2>I build for the Web</h2>
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