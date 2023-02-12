import React from 'react';
import { Container } from '../../layout';

import './Hero.scss';
import { HeroWelcome } from './hero-welcome';
import { Slider } from '../slider';

import { heroContentExample, arrayOfComics } from '../../../examples';


export const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <Container>
        <div className='hero__left-side'>
          <HeroWelcome title={heroContentExample.title}
                       description={heroContentExample.description}
                       quote={heroContentExample.quote}
                       quoteAuthor={heroContentExample.quoteAuthor} />
        </div>
        <div className='hero__right-side'>
          <Slider items={arrayOfComics} />
        </div>
      </Container>
    </div>
  );
};
