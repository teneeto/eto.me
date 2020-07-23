import React, { Fragment } from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { ReactComponent as Pattern1 } from '../../assets/Pattern1.svg';
import { Header, Footer, ReloadToTop } from '../../components';
import { StyledProjects } from './Projects.styled';
import { Image } from './Image';
export const Projects = () => {
  ReloadToTop();
  const retailar = require('../../assets/myretailar.png');
  const kbx = require('../../assets/kbx_site.png');
  const retailarShop = require('../../assets/retailar_shop.png');
  const hazon = require('../../assets/hazon.png');
  const gifSearch = require('../../assets/gif_search_app.png');
  const etoPortfolio = require('../../assets/eto_portfolio.png');

  return (
    <Fragment>
      <Header />
      <StyledProjects  >
        <div className='toTop2'>
          <h2>My Projects</h2>
          <p>Selected Projects I've Worked on</p>
        </div>

        <article className='normal-exp'>
          <Image image={retailarShop} className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </Image>
          <div className='toTop4'>
            <h3>Retailar Shop</h3>
            <p>
              A grocery shop where retailers (merchants) and customers Source for products directly from manufacturer.
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
                <li>|</li>
                <li>SalesJS</li>
              </ul>
            </div>
            <div>
              <button>
                <a href="https://shop.myretailar.com" target="_blank" rel="noopener noreferrer">View Project </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>



        <article className='flipped-exp toTop4'>
          <div>
            <h3>Kubitx</h3>
            <p>
              KubitX is a wallet Platform powered by blockchain
            </p>
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
                <a href="https://kubitx.com" target="_blank" rel="noopener noreferrer">View Project </a>
              </button>
            </div>
          </div>
          <Image image={kbx} className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </Image>
        </article>

        <article className='normal-exp'>
          <Image image={retailar} className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </Image>
          <div className='toTop4'>
            <h3>Retailar Request Access</h3>
            <p>
              Retailar Landing Page, customers and merchants access request page.
              Retailar is a grocery shop where retailers (merchants) and customers Source for products directly from manufacturer.
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
                <a href="https://myretailar.com" target="_blank" rel="noopener noreferrer">View Project </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className='flipped-exp toTop4'>
          <div>
            <h3>Kubitx</h3>
            <p>
              Hazon Landing Page, still in Progress...
            </p>
            <div>
              <ul>
                <li>HTML </li>
                <li>|</li>
                <li>SASS</li>
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
                <a href="https://hazontech.com" target="_blank" rel="noopener noreferrer">View Project </a>
              </button>
            </div>
          </div>
          <Image image={hazon} className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </Image>
        </article>

        <article className='normal-exp'>
          <Image image={gifSearch} className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </Image>
          <div className='toTop4'>
            <h3>Gif Search</h3>
            <p>
              Search for gif images...
            </p>
            <div>
              <ul>
                <li>Angular </li>
                <li>|</li>
                <li>bootstrap</li>
              </ul>
            </div>
            <div>
              <button>
                <a href="https://angular-test-gif-app.herokuapp.com/images" target="_blank" rel="noopener noreferrer">View Project </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className='flipped-exp toTop4'>
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
            </div>
          </div>
          <Image image={etoPortfolio} className='toTop3'>
            <Pattern1 className='pattern1' data-shape />
          </Image>
        </article>
      </StyledProjects>
      <Footer />
    </Fragment>
  )
}
