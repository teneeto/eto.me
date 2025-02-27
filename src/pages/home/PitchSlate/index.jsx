import React from "react";
// import { ReactComponent as Pattern1 } from '../../../assets/Pattern1.svg';
// import { ReactComponent as Pattern2 } from '../../../assets/Pattern2.svg';
import { StyledPitchSlate } from "./styles";

export const PitchSlate = () => {
  // const pattern1 = require('../../../assets/Pattern1.svg');
  // const pattern2 = require('../../../assets/Pattern2.svg');
  return (
    <StyledPitchSlate>
      <header className="container">
        <div className="intro">
          <h1 className="toTop1">Hello I'm Eto Olei,</h1>
          <h1 className="toTop2">
            <span>I build for the Web</span>
          </h1>
          <p className="toTop3">
            I am a Software developer, based in Lagos, Nigeria. i spend time
            building amazing websites, applications and everything in between.
          </p>
        </div>
        <div className="picture-wrapper">
          <div className="picture toTop4">
            <div>
              {/* <Pattern1 className='pattern1' data-shape /> */}
              <span className="pattern1" aria-label="pattern1" role="img" />
            </div>
            <div>
              {/* <Pattern2 className='pattern2' data-shape /> */}
              <span className="pattern2" aria-label="Pattern2" role="img" />
            </div>
            <span className="ketchup" aria-label="Photo of Eto" role="img" />
            <div></div>
          </div>
        </div>
      </header>
    </StyledPitchSlate>
  );
};
