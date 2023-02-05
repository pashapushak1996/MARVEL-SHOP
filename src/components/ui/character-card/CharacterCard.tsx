import React from 'react';

import { ICharacter } from '../../../models';
import { Typography } from '../typography';

import './CharacterCard.scss';

interface ICharacterCard {
  character: ICharacter;
}

export const CharacterCard: React.FC<ICharacterCard> = ({ character }) => {
  const { name, cover } = character;

  return (
    <div className='character-card'>
      <div className='character-card__cover'>
        <img className='character-card__cover-img' src={cover} alt='' />
      </div>
      <Typography
        className='character-card__name'
        size={18}
        variant='h5'
        weight={700}>{name}</Typography>
    </div>
  );
};
