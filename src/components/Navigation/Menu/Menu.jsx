// Menu.js
import React from "react";
import { bool } from "prop-types";
import { Link as ScrollLink } from "react-scroll";

import { StyledLink } from "../..";
import { StyledMenu } from "./Menu.styled";
const Menu = ({ open, setOpen, home, about, projects }) => {
  return (
    <StyledMenu open={open}>
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
                onClick={() => setOpen(!open)}
              >
                <span></span>
                Home
              </ScrollLink>
            </li>
          )}

          {!home && (
            <li>
              <StyledLink to="/" onClick={() => setOpen(!open)}>
                <span></span>
                Home
              </StyledLink>
            </li>
          )}

          {about && (
            <li>
              <StyledLink to="/about" onClick={() => setOpen(!open)}>
                <span></span>
                About Me
              </StyledLink>
            </li>
          )}

          {!about && (
            <li>
              <StyledLink to="/about" onClick={() => setOpen(!open)}>
                <span></span>
                About Me
              </StyledLink>
            </li>
          )}

          {projects && (
            <li>
              <StyledLink to="/projects" onClick={() => setOpen(!open)}>
                <span></span>
                Projects
              </StyledLink>
            </li>
          )}

          {!projects && (
            <li>
              <StyledLink to="/projects" onClick={() => setOpen(!open)}>
                <span></span>
                Projects
              </StyledLink>
            </li>
          )}
        </ul>
        <div>
          <h3>Contact Me</h3>
          <div>
            <span></span>
            <a href="mailto:oleietotaziba@gmail.com">oleietotaziba@gmail.com</a>
          </div>
        </div>
      </div>

      <div>
        <h3>Social Media</h3>
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
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  setOpen: bool.isRequired,
};
export default Menu;
