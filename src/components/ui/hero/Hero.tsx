import React from 'react';
import { Container } from '../../layout';

import './Hero.scss';
import { HeroWelcome } from './hero-welcome';
import { Slider } from '../slider';

import { heroContentExample } from '../../../examples';
import { IComic } from '../../../types';

interface IHeroProps {
  comics: Array<IComic>;
}


export const Hero: React.FC<IHeroProps> = ({ comics }) => {
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
          <Slider items={comics} />
        </div>
      </Container>
    </div>
  );
};
