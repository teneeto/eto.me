import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { StyledLink } from "..";
import { StyledFooter } from "./styles";

export const Footer = ({ home, about, projects }) => {
  return (
    <StyledFooter home={home}>
      <div className="wrapper">
        <div className="contact">
          <div>
            <h3>Contact Me</h3>
            <div>
              <span></span>
              <a href="mailto:etotaziba.olei@gmail.com">Send a Mail</a>
            </div>
          </div>
          <div>
            <ul>
              {home && (
                <li>
                  <ScrollLink
                    to="pitchslate"
                    spy={true}
                    smooth={true}
                    duration={5}
                    offset={-400}
                  >
                    <span></span>
                    Home
                  </ScrollLink>
                </li>
              )}
              {!home && (
                <li>
                  <StyledLink to="/">
                    <span></span>
                    Home
                  </StyledLink>
                </li>
              )}

              {about && (
                <li>
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={5}
                    offset={-400}
                  >
                    <span></span>
                    About Me
                  </ScrollLink>
                </li>
              )}
              {!about && (
                <li>
                  <StyledLink to="/about">
                    <span></span>
                    About Me
                  </StyledLink>
                </li>
              )}

              {projects && (
                <li>
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={5}
                    offset={-400}
                  >
                    <span></span>
                    Projects
                  </ScrollLink>
                </li>
              )}
              {!projects && (
                <li>
                  <StyledLink to="/projects">
                    <span></span>
                    Projects
                  </StyledLink>
                </li>
              )}
              <li>
                <a
                  href="/EtotazibaCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div>© Eto Olei 2025</div>
          <div>
            <ul>
              <li>
                <span></span>{" "}
                <a
                  href="https://twitter.com/teneetoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TW
                </a>
              </li>
              <li>
                <span></span>{" "}
                <a
                  href="https://github.com/teneeto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GH
                </a>
              </li>
              <li>
                <span></span>{" "}
                <a
                  href="https://linkedin.com/in/teneeto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LN
                </a>
              </li>
              {/* <li><span></span> <a href='https://instagram.com/teneeto' target='_blank' rel='noopener noreferrer'>IG</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
