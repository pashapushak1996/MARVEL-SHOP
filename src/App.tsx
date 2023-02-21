import React, { useEffect } from 'react';

import './App.scss';
import { getAllComics, getComicById } from './api/marvelApi/marvel.api';

const App = () => {


  useEffect(() => {
    getAllComics({ limit: 10, offset: 30 }).then(res => console.log(res));
    getComicById(25856).then(res => console.log(res));
  }, []);

  return (
    <div className='App'>
    </div>
  );
};

export default App;
