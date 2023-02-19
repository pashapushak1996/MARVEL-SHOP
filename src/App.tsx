import React, { useEffect, useState } from 'react';

import { Footer, Header } from './components/ui';
import { IComic, IComicsResponse } from './models';
import { comicsService } from './services/comics.service';
import { normalizeComic } from './helpers';
import { Container } from './components/layout';

import './App.scss';
import { HomePage } from './pages';

const App = () => {
  const [comics, setComics] = useState([]);

  const fetchComics = async () => {
    const comicsFromAPI = await comicsService.getAllComics(12, true);

    const normalizedComics = comicsFromAPI.map((comic: IComicsResponse): IComic => normalizeComic(comic));

    setComics(normalizedComics);
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <div className='App'>
        <HomePage comics={comics} />
    </div>
  );
};

export default App;
