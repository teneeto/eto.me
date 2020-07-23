import React, { Fragment } from 'react'

import { StyledAbout } from './About.styled';
import { Header, Footer, ImageFrame, ReloadToTop } from '../../components';

export const About = () => {
  ReloadToTop();

  return (
    <Fragment>
      <Header />
      <StyledAbout>
        <div className='container'>
          <div className='toTop2'>
            <h2>About Me</h2>
          </div>

          <article>
            <div className='toTop3' >
              <ImageFrame />
            </div>
            <div className='toTop4'>
              <div>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium doloremque eopsloi audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunot explicabo. Nemo ernim ipsam.
              </p>
                <p>
                  audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunot explicabo. Nemo ernim ipsam.
              </p>
                <p>
                  audantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunot explicabo. Nemo ernim ipsam.
              </p>
                <p>
                  These are the tools I work with:
              </p>

                <div>
                  <ul>
                    <li><div />HTML</li>
                    <li><div />ReactJS</li>
                    <li><div />SASS</li>
                    <li><div />CSS</li>
                    <li><div />NodeJS</li>
                    <li><div />VueJS</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </StyledAbout>
      <Footer />
    </Fragment >
  )
}
