import React from 'react';

import { Typography } from '../../../components/shared';
import { Container } from '../../../components/layout';

import './HomeSection.scss';

interface IHomeSectionProps {
  title?: string;
  children: React.ReactNode;
}

export const HomeSection: React.FC<IHomeSectionProps> = ({ title, children }) => {

  const titleSection = title &&
    <div className='home-section__title'>
      <Typography variant={'heading-lg'}
                  weight={'bold'}
                  as={'h2'}>
        {title}
      </Typography>
    </div>;

  return (
    <div className='home-section'>
      {titleSection}
      <Container>
        {children}
      </Container>
    </div>
  );
};
