import React from 'react';
import { Typography } from '../../../components/ui';
import { Container } from '../../../components/layout';

import './Section.scss';

interface ISectionProps {
  /** It's title of section for example( Characters )*/
  title?: string;

  /** It's content of section */
  children: React.ReactNode;

  /** It's padding from top and bottom */
  paddingBlock?: number;
}

export const Section: React.FC<ISectionProps> = ({ title, children, paddingBlock }) => {
  return (
    <div className='section' style={{ paddingBlock }}>
      <Container>
        <Typography className='section__title'
                    weight={700}
                    size={36}>{title}</Typography>
        <div className='section__content'>
          {children}
        </div>
      </Container>
    </div>
  );
};
