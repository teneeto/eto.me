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
            <span>I build for the Web & Mobile</span>
          </h1>
          <p className="toTop3">
            I’m a Software Developer, always on the move, creating innovative
            websites, mobile apps, and everything in between. As a remote
            engineer with over 6+ of development experience (React and React
            Native), I’m not bound by location—wherever I am, I’m crafting
            seamless digital experiences that connect users everywhere.
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
