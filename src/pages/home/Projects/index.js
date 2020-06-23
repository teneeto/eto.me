import React from 'react';
import { StyledProjects } from './styles';
import { ExBag } from '../../../components'

export const Projects = () => {
  return (
    <StyledProjects>
      <div className='container'>
        <ExBag name='Projects' />
      </div>
    </StyledProjects>
  )
}