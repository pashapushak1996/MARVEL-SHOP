import React from 'react';

import { CalendarCard, CharacterCard, ComicCard, Footer, Header, Hero } from '../../components/ui';
import { Container, Grid } from '../../components/layout';
import { Section } from './section';

import './HomePage.scss';

import modalImage from '../../assets/ModalImage.png';
import { charactersArray } from '../../examples';

import { IComic } from '../../models';

interface IHomeProps {
  comics: Array<IComic>;
}

export const HomePage: React.FC<IHomeProps> = ({ comics }) => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <Section title={'Latest releases'} paddingBlock={40}>
        <Grid
          spacing={'lg'}
          justifyContent={'flex-start'}
          container>
          {comics.map((comics: IComic) =>
            <Grid key={comics.id}
                  sm={6}
                  md={4}
                  lg={3} item>
              <ComicCard comics={comics} />
            </Grid>,
          )}
        </Grid>
      </Section>
      <Section paddingBlock={10}>
        <Grid
          spacing={'lg'}
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          container>
          {[1, 2, 3, 4, 5].map(element =>
            <Grid key={element}
                  sm={2}
                  md={4}
                  lg={4} item>
              <CalendarCard cover={modalImage} title={'February 2022'} variant={'red'} />
            </Grid>,
          )}
        </Grid>
      </Section>
      <Section title={'Characters'} paddingBlock={50}>
        <Grid
          spacing={'md'}
          alignItems={'center'}
          justifyContent={'space-between'}
          container>
          {charactersArray.map((character, index) =>
            <Grid key={character.id + index}
                  item>
              <CharacterCard character={character} />
            </Grid>,
          )}
        </Grid>
      </Section>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};
