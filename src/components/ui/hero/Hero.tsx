import React from 'react';
import { Container } from '../../layout';

import './Hero.scss';
import { HeroWelcome } from './hero-welcome';
import { Slider } from '../slider';

import { IComic } from '../../../types';
import { Loader } from '../../shared';

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
  const heroRightContent =
    comics.length === 0
      ? <Loader />
      : <Slider items={comics} />;

  return (
    <div className='hero'>
      <Container>
        <div className='hero__left-side'>
          <HeroWelcome title={heroWelcomeContent.title}
                       description={heroWelcomeContent.description}
                       quote={heroWelcomeContent.quote}
                       quoteAuthor={heroWelcomeContent.quoteAuthor} />
        </div>
        <div className='hero__right-side'>
          {heroRightContent}
        </div>
      </Container>
    </div>
  );
};
