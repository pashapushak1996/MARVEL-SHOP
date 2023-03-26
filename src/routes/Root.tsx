import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components/ui';
import '../App.scss';
import { Container } from '../components/layout';

export const Root = () => {
  return (
    <div className='app'>
      <div className='app__header'>
        <Header />
      </div>
      <div className='app__content'>
        <Outlet />
      </div>
      <div className='app__footer'>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};
