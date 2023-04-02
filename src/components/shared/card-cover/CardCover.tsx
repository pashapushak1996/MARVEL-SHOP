import React from 'react';

import './CardCover.scss';

interface ICardCoverProps {
  /** This is path to image which will be background to block*/
  coverImage: string;
}

export const CardCover: React.FC<ICardCoverProps> = ({ coverImage }) => {
  return (
    <div className='card-cover'>
      <img className='card-cover__img' src={coverImage} alt='' />
    </div>
  );
};

