import React from 'react';
import { StyledExBag } from './styles';

export const ExBag = ({ name, reverse }) => {
  return (
    <StyledExBag reverse={reverse}>
      <div className='topic'>
        <h2>{name}</h2>
      </div>

      <div className='wrapper'>
        <div className='box1'></div>
        <div className='box2'></div>
      </div>
    </StyledExBag>
  )
}