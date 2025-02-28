import React, { Fragment } from "react";
import { Element } from "react-scroll";

import { StyledAbout } from "./About.styled";
import { Header, Footer, ImageFrame, ReloadToTop } from "../../components";

export const About = () => {
  ReloadToTop();

  return (
    <Fragment>
      <Header />

      <StyledAbout>
        <div className="container">
          <Element name="about">
            <div className="toTop2">
              <h2>About Me</h2>
            </div>
          </Element>

          <article>
            <div className="toTop3">
              <ImageFrame />
            </div>
            <div className="toTop4">
              <div>
                <p>
                  Hello, I'm Eto, a Software Developer who loves traveling and
                  working from different locations.
                </p>
                <p>
                  I build high-performance applications and contribute to
                  open-source projects that improve developer experiences. I’ve
                  worked on Expensify, React Native Paper, React Navigation and
                  other OSS libraries, enhancing UI/UX and functionality.
                </p>
                <p>
                  I’ve helped scale products like Tensfer (a seamless CEX-DeFi
                  wallet) and OurHaven, where I migrated the mobile app to React
                  Native CLI for better performance and flexibility. As a
                  co-founder of Clooza, I’m leading the development of a smart
                  discovery platform.
                </p>
                <p>
                  I’ve also worked at Callstack, Bene Studio, KubitX, Retailar,
                  and Hazon Technology, building fintech, retail, and enterprise
                  solutions that impact users worldwide.
                </p>

                <p class="tools">These are few tools I work with:</p>

                <div>
                  <ul>
                    <li>
                      <div />
                      React
                    </li>
                    <li>
                      <div />
                      React Native
                    </li>
                    <li>
                      <div />
                      Next.js
                    </li>
                    <li>
                      <div />
                      JavaScript
                    </li>

                    <li>
                      <div />
                      TypeScripts
                    </li>
                    <li>
                      <div />
                      HTML5
                    </li>
                    <li>
                      <div />
                      CSS
                    </li>
                    <li>
                      <div />
                      SASS
                    </li>
                    <li>
                      <div />
                      Tailwind
                    </li>
                    <li>
                      <div />
                      Styled Components
                    </li>

                    <li>
                      <div />
                      NPM Scripts
                    </li>
                    <li>
                      <div />
                      Mocha
                    </li>
                    <li>
                      <div />
                      Jest
                    </li>
                    <li>
                      <div />
                      NodeJS
                    </li>
                  </ul>
                </div>
                <p class="tools">I also work having these in mind:</p>

                <div>
                  <ul>
                    <li>
                      <div />
                      PWAs
                    </li>
                    <li>
                      <div />
                      Unit Testing
                    </li>
                    <li>
                      <div />
                      Performance Optimization
                    </li>
                    <li>
                      <div />
                      Accessibiltiy auditing
                    </li>
                    <li>
                      <div />
                      Build Automation
                    </li>
                    <li>
                      <div />
                      Responsive Web Design
                    </li>
                    <li>
                      <div />
                      SEO Compliant
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </StyledAbout>

      <Footer about={true} />
    </Fragment>
  );
};
