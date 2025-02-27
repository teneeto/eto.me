import React, { Fragment } from "react";
import { Element } from "react-scroll";

import { BsArrowRight } from "react-icons/bs";
import Pattern1 from "../../assets/Pattern1.svg";
import retailar from "../../assets/myretailar.png";
import kbx from "../../assets/kbx_site.png";
import retailarShop from "../../assets/retailar_shop.png";
import hazon from "../../assets/hazon.png";
import gifSearch from "../../assets/gif_search_app.png";
import etoPortfolio from "../../assets/eto_portfolio.png";
import { Header, Footer, ReloadToTop } from "../../components";
import { StyledProjects } from "./Projects.styled";
import { Image } from "./Image";
export const Projects = () => {
  ReloadToTop();

  return (
    <Fragment>
      <Header />
      <StyledProjects>
        <Element name="projects">
          <div className="toTop2">
            <h2>My Projects</h2>
            <p>Selected Projects I've Worked on.</p>
          </div>
        </Element>

        <article className="normal-exp">
          <Image image={retailarShop} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
          <div className="toTop4">
            <h3>Retailar Shop</h3>
            <p>
              A grocery shop where retailers (merchants) and customers Source
              for products directly from manufacturer.
            </p>
            <div>
              <ul>
                <li>ReactJS </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>Semantic UI</li>
                <li>|</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://shop.myretailar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className="flipped-exp toTop4">
          <div>
            <h3>Kubitx</h3>
            <p>KubitX is a wallet Platform powered by blockchain</p>
            <div>
              <ul>
                <li>React </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>Bulma</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://kubitx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight className="arrow-right" size={22} />
            </div>
          </div>
          <Image image={kbx} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
        </article>

        <article className="normal-exp">
          <Image image={retailar} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
          <div className="toTop4">
            <h3>Retailar Request Access</h3>
            <p>
              Retailar Landing Page, customers and merchants access request
              page. Retailar is a grocery shop where retailers (merchants) and
              customers Source for products directly from manufacturer.
            </p>
            <div>
              <ul>
                <li>ReactJS </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://myretailar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className="flipped-exp toTop4">
          <div>
            <h3>Hazon Technology</h3>
            <p>Hazon Landing Page</p>
            <div>
              <ul>
                <li>HTML </li>
                <li>|</li>
                <li>SASS</li>
                <li>|</li>
                <li>GSAP</li>
                <li>|</li>
                <li>Babel</li>
                <li>|</li>
                <li>Webpack</li>
                <li>|</li>
                <li>NPM Scripts</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://hazontech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight className="arrow-right" size={22} />
            </div>
          </div>
          <Image image={hazon} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
        </article>

        <article className="normal-exp">
          <Image image={gifSearch} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
          <div className="toTop4">
            <h3>Gif Search</h3>
            <p>Search for gif images...</p>
            <div>
              <ul>
                <li>Angular </li>
                <li>|</li>
                <li>bootstrap</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://angular-test-gif-app.herokuapp.com/images"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className="flipped-exp toTop4">
          <div>
            <h3>Eto OLei Blog/Portfolio</h3>
            <p>
              This site is Eto's Portfolio and would be personal blog site...
            </p>
            <div>
              <ul>
                <li>ReactJS</li>
                <li>|</li>
                <li>Styled Components</li>
                <li>|</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <button>
                <a href="/">View Project </a>
              </button>
              <BsArrowRight className="arrow-right" size={22} />
            </div>
          </div>
          <Image image={etoPortfolio} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
        </article>
      </StyledProjects>
      <Footer projects={true} />
    </Fragment>
  );
};
