import React from 'react';

import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../ui';
import { Container } from '../../layout';

import './DesktopLayout.scss';

export const DesktopLayout = () => {
  return (
    <div className='layout'>
      <header className='layout__header'>
        <Header />
      </header>
      <main className='layout__content'>
        <Outlet />
      </main>
      <footer className='layout__footer'>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
};