import React from 'react';
import { Container } from '../../layout';

import './Hero.scss';

export const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <Container>
        <div className='hero__left-side'></div>
        <div className='hero__right-side'></div>
      </Container>
    </div>

  );
};
