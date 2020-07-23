import React from 'react';
import { StyledProjects } from './styles';
import { StyledLink } from '../../../components';

export const Projects = () => {
  const projectImageCluster = require('../../../assets/project_cluster.png');
  return (
    <StyledProjects>
      <div className='container'>
        <div className='topic'>
          <h2>Projects</h2>
        </div>

        <div className='wrapper'>
          <div>
            <img src={projectImageCluster} alt='clustered project images' />
          </div>
          <div>
            <div>
              <p>Web projects I’ve worked on in the past and currently working on.</p>
              <StyledLink to='/projects'>
                <button>See My Projects</button>
              </StyledLink>
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  )
}