import React from 'react';
import { ReactComponent as Pattern1 } from '../../../assets/Pattern1.svg';
import { ReactComponent as Pattern2 } from '../../../assets/Pattern2.svg';
import { StyledPitchSlate } from './styles';

export const PitchSlate = () => {
  return (
    <StyledPitchSlate>
      <div className='container'>
        <div className='intro'>
          <h2>Hello I'm Eto Olei,</h2>
          <h2>FrontEnd Developer</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deseruntmollit anim id
            est eopksio laborum. Sed ut perspiciatis unde omnis istpoe
            natus error sit voluptatem accusantium doloremque eopsloi audantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
            et quasi architecto beatae vitae dicta sunot explicabo. Nemo ernim ipsam.
          </p>
        </div>
        <div className='picture'>
          <div></div>
          <Pattern1 className='pattern1' data-shape />
          <div></div>
          <Pattern2 className='pattern2' data-shape />
          <span className='ketchup' aria-label='Photo of Eto' role='img' />
        </div>
      </div>
    </StyledPitchSlate>
  )
}