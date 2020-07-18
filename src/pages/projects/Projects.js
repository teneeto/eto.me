import React, { Fragment } from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { ReactComponent as Pattern1 } from '../../assets/Pattern1.svg';
import { Header, Footer, ReloadToTop } from '../../components';
import { StyledProjects } from './Projects.styled';
export const Projects = () => {
  ReloadToTop();

  return (
    <Fragment>
      <Header />
      <StyledProjects>
        <div className='toTop2'>
          <h2>My Projects</h2>
        </div>


        <article className='normal-exp'>
          <div className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </div>
          <div className='toTop4'>
            <h3>Project Name </h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div>
              <ul>
                <li>HTML </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div>
              <button>View Project </button><BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className='flipped-exp toTop4'>
          <div>
            <h3>Project Name</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div>
              <ul>
                <li>HTML </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div>
              <button name='view-project'>View Project</button><BsArrowRight className='arrow-right' size={22} />
            </div>
          </div>
          <div>
            <Pattern1 className='pattern1' data-shape />
          </div>
        </article>

        <article className='normal-exp'>
          <div>
            <Pattern1 className='pattern1' data-shape />
          </div>
          <div>
            <h3>Project Name </h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div>
              <ul>
                <li>HTML </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div>
              <button>View Project </button><BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className='flipped-exp toTop4'>
          <div>
            <h3>Project Name</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div>
              <ul>
                <li>HTML </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>ReactJS</li>
              </ul>
            </div>
            <div>
              <button name='view-project'>View Project</button><BsArrowRight className='arrow-right' size={22} />
            </div>
          </div>
          <div>
            <Pattern1 className='pattern1' data-shape />
          </div>
        </article>
      </StyledProjects>
      <Footer />
    </Fragment>
  )
}
