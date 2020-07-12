import React from 'react';
import { StyledExBag } from './styles';

export const ExBag = ({ name, reverse }) => {
  return (
    <StyledExBag reverse={reverse}>
      <div className='topic'>
        <h2>{name}</h2>
      </div>

      <div className='wrapper'>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>
            <p>Web projects I’ve worked on in the past and currently working on.</p>
            <button>See My Projects</button>
          </div>
        </div>
      </div>
    </StyledExBag>
  )
}