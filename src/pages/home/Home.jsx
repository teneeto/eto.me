import React, { Fragment, useContext } from "react";
import { Element } from "react-scroll";

import { PitchSlate } from "./PitchSlate";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Header, Footer, Scroll, ReloadToTop } from "../../components";
import { StoreContext } from "../../store";

const Home = () => {
  const [state] = useContext(StoreContext);
  ReloadToTop();

  return (
    <Fragment>
      <Header home={true} />
      <Scroll visible={state.sections} />
      <main>
        <Element name="pitchslate">
          <PitchSlate />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </main>

      <Element name="footer">
        <Footer home={true} />
      </Element>
    </Fragment>
  );
};
export default Home;
