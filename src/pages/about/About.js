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
                  Hello I'm Eto, a Software Developer based in Lagos, Nigeria
                </p>
                <p>
                  I spend time building anything that is an occupant of the internet.
                  I'm particular about building Responsive Web Presence with Applied Accessibility and Applied Visual Design with Mobile-Users inclusion and Considerations.
                </p>
                <p>
                  I have worked with teams to build scalable and marketable products that are currently been used by a large number of users.
                </p>
                <p>
                  Currently brainstorming and building amazing Products for Hazon Technology
                </p>
                <p>
                  In the past i have worked with Retailar Technology to build Retail Services. Prior to Retailar, I have Worked with KubitX to build Elegant landing pages and tag along with the Engineering team to create a crypto exchange platform
                </p>

                <p>
                  These are few tools I work with:
              </p>

                <div>
                  <ul>
                    <li><div />HTML5</li>
                    <li><div />CSS</li>
                    <li><div />SASS</li>
                    <li><div />Tailwind</li>
                    <li><div />Styled Components</li>
                    <li><div />Bootstrap</li>
                    <li><div />JavaScript(Es6)</li>
                    <li><div />Babel</li>
                    <li><div />Webpack</li>
                    <li><div />NPM Scripts</li>
                    <li><div />TypeScripts</li>
                    <li><div />React JS</li>
                    <li><div />Mocha</li>
                    <li><div />Jest</li>
                    <li><div />NodeJS</li>

                  </ul>
                </div>
                <p>
                  I also work having these in mind:
              </p>

                <div>
                  <ul>
                    <li><div />PWAs</li>
                    <li><div />Unit Testing</li>
                    <li><div />Performance Optimization</li>
                    <li><div />Accessibiltiy auditing</li>
                    <li><div />Build Automation</li>
                    <li><div />Responsive Web Design</li>
                    <li><div />SEO Compliant</li>



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
