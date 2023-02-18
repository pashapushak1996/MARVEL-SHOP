import React, { useEffect, useState } from 'react';

import './App.scss';
import { Footer, Header } from './components/ui';
import { DetailPage } from './pages';
import { IComic, IComicsResponse } from './models';
import { comicsService } from './services/comics.service';
import { normalizeComic } from './helpers';
import { Container } from './components/layout';

const App = () => {
  const [comics, setComics] = useState([]);
  const [comic, setComic] = useState<IComic>({
    cover: '',
    date: '',
    description: '',
    id: 0,
    pages: 0,
    price: 0,
    title: '',
  });

  const fetchComics = async () => {
    const comicsFromAPI = await comicsService.getAllComics(12, true);

    console.log(comicsFromAPI);

    const normalizedComics = comicsFromAPI.map((comic: IComicsResponse): IComic => normalizeComic(comic));

    setComics(normalizedComics);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Container>
        <DetailPage comic={comic} comics={comics} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
