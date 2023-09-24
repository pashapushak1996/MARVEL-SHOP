import React, { ChangeEvent } from 'react';

import { Container } from '../../../components/layout';
import { IntroductionPanel } from './introduction-panel';

import { IComic, Slider } from '@/modules/comics';

import './Hero.scss';

interface IHeroProps {
  comics: Array<IComic>;
}

const heroWelcomeContent = {
  title: 'All Marvel Comics in one place',
  description: 'Welcome to Super-Heroes Shop specialized in Marvel Comics. You will find in the shelves of our shop all your favorite super heroes: Spider-Man, Iron Man, Avengers, X-men, Fanstastic 4...',
  quote: '“With great power comes great responsibility”',
  quoteAuthor: 'Benjamin Parker (aka Uncle Ben)',
};


export const Hero: React.FC<IHeroProps> = ({ comics }) => {
  return (
    <div className='hero'>
      <Container>
        <div className='hero__left-side'>
          <IntroductionPanel title={heroWelcomeContent.title}
                             description={heroWelcomeContent.description}
                             quote={heroWelcomeContent.quote}
                             quoteAuthor={heroWelcomeContent.quoteAuthor} />
        </div>
        <div className='hero__right-side'>
          <Slider comics={comics} />
        </div>
      </Container>
    </div>
  );
};
