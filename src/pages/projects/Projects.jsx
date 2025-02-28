import React, { Fragment } from "react";
import { Element } from "react-scroll";

import { BsArrowRight } from "react-icons/bs";
import Pattern1 from "../../assets/Pattern1.svg";
import retailar from "../../assets/myretailar.png";
import kbx from "../../assets/kbx_site.png";
import retailarShop from "../../assets/retailar_shop.png";
import hazon from "../../assets/hazon.png";
import gifSearch from "../../assets/gif_search_app.png";

import exfy from "../../assets/exfy.png";
import ourHaven from "../../assets/ourhaven.png";
import tensfer from "../../assets/tensfer.png";
import reactNavigation from "../../assets/rnavigation.png";
import reactNativePaper from "../../assets/rnpaper.png";
import clooza from "../../assets/clooza.png";
import cruud from "../../assets/cruud.png";

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
            <p>
              Selected Projects I've Worked on or made significant Contributions
              to.
            </p>
          </div>
        </Element>

        <article className="normal-exp">
          <Image image={exfy} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
          <div className="toTop4">
            <h3>Expensify</h3>
            <p>
              I contributed to enhancing Expensify’s mobile app, focusing on
              intuitive UI, seamless expense management workflows, and
              optimizing performance to deliver a smooth, user-friendly
              experience for managing business expenses efficiently.
            </p>
            <div>
              <ul>
                <li>React Native </li>
                <li>|</li>
                <li>React Native Web </li>
                <li>|</li>
                <li>React Native Onyx</li>
                <li>|</li>
                <li>Native Styles</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://github.com/Expensify/App/pulls?q=is%3Apr+author%3Ateneeto+is%3Aclosed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Merged PRs{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                |{" "}
              </span>
              <button>
                <a
                  href="https://play.google.com/store/apps/details?id=org.me.mobiexpensifyg&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PlayStore{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                |{" "}
              </span>
              <button>
                <a
                  href="https://apps.apple.com/us/app/expensify-travel-expense/id471713959"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AppStore{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>
                |{" "}
              </span>
              <button>
                <a
                  href="https://new.expensify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web app{" "}
                </a>
              </button>
              <BsArrowRight size={22} />
            </div>
          </div>
        </article>

        <article className="flipped-exp toTop4">
          <div>
            <h3>React Native Paper</h3>
            <p>
              I contributed to enhancing React Native Paper by implementing
              hover support for web apps based on Material Design specs and
              adding cursorColor support to TextInput for improved customization
              and user experience on Android.
            </p>
            <div>
              <ul>
                <li>React Native </li>
                <li>|</li>
                <li>React Native Web </li>
                <li>|</li>
                <li>Expo</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://github.com/callstack/react-native-paper/pulls?q=is%3Apr+is%3Aclosed+author%3Ateneeto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Contributions{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>|</span>
              <button>
                <a
                  href="https://reactnativepaper.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight className="arrow-right" size={22} />
            </div>
          </div>
          <Image image={reactNativePaper} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
        </article>

        <article className="normal-exp">
          <Image image={reactNavigation} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
          <div className="toTop4">
            <h3>React Navigation</h3>
            <p>
              I contributed to React Navigation by adding an animation prop to
              bottom tabs, enabling custom animations, presets, and transition
              configurations for a smoother and more dynamic navigation
              experience.
            </p>
            <div>
              <ul>
                <li>React Native</li>
                <li>|</li>
                <li>React Navigation</li>
                <li>|</li>
                <li>Expo</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://github.com/react-navigation/react-navigation/pulls?q=is%3Apr+author%3Ateneeto+is%3Aclosed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Contribution{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>|</span>
              <button>
                <a
                  href="https://reactnavigation.org/"
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
            <h3>OurHaven</h3>
            <p>
              Migrated OurHaven’s app from Expo to React Native CLI, reducing
              load times by 30%. Led frontend development, improving UI/UX and
              boosting retention by 25%, while optimizing architecture for
              scalability and maintainability.
            </p>
            <div>
              <ul>
                <li>React </li>
                <li>|</li>
                <li>React Native </li>
                <li>|</li>
                <li>Firbebase</li>
                <li>|</li>
                <li>Graphql</li>
                <li>|</li>
                <li>Native Styles</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://github.com/teneeto?tab=overview&from=2023-12-01&to=2023-12-31&org=ourHaven"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribution Listing{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>|</span>
              <button>
                <a
                  href="https://play.google.com/store/apps/details?id=app.ourhaven.ourhaven&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PlayStore{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>|</span>
              <button>
                <a
                  href="https://apps.apple.com/us/app/our-haven/id1629873945"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AppStore{" "}
                </a>
              </button>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>|</span>
              <button>
                <a
                  href="https://ourhaven.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project{" "}
                </a>
              </button>
              <BsArrowRight className="arrow-right" size={22} />
            </div>
          </div>
          <Image image={ourHaven} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
        </article>

        <article className="normal-exp">
          <Image image={tensfer} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
          <div className="toTop4">
            <h3>Tensfer</h3>
            <p>
              Built a Chrome extension for Tensfer, enabling seamless CEX and
              DeFi asset management, quick transfers, and secure payments
              directly from the browser, enhancing user accessibility,
              efficiency, and overall transaction experience.
            </p>
            <div>
              <ul>
                <li>React </li>
                <li>|</li>
                <li>Next.js</li>
                <li>|</li>
                <li>Blockchain</li>
                <li>|</li>
                <li>SDK</li>
              </ul>
            </div>
            <div>
              <button>
                <a
                  href="https://chromewebstore.google.com/detail/tensfer/eibklninoohhbdpjehjgednpmlhdjicg?utm_source=ext_app_menu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome Extension{" "}
                </a>
              </button>
              <button>
                <a
                  href="https://tensfer.co/"
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
            <h3>Clooza</h3>
            <p>
              ​As co-founder, I'm developing Clooza, an interactive discovery
              platform that helps users explore personalized events, activities,
              places, and offers. Currently, I'm leading the development team,
              focusing on creating a seamless user experience and integrating
              advanced recommendation algorithms.
            </p>
            <div>
              <ul>
                <li>React.js</li>
                <li>|</li>
                <li>Next.js</li>
                <li>|</li>
                <li>Tailwind</li>
                <li>|</li>
                <li>React Native</li>
              </ul>
            </div>
            <div>
              <button>
                <a href="https://clooza.com/">Join the Waiting List </a>
              </button>
              <BsArrowRight className="arrow-right" size={22} />
            </div>
          </div>
          <Image image={clooza} className="toTop3">
            <img src={Pattern1} alt="Pattern" className="pattern1" data-shape />
          </Image>
        </article>
      </StyledProjects>
      <Footer projects={true} />
    </Fragment>
  );
};
