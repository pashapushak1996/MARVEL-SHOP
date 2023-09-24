import React from 'react';

import { Typography } from '../../../../components/shared';

import './CharacterCard.scss';
import { ICharacter } from '@/modules/characters/types';

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
      <div className='character-card__name'>
        <Typography as='h5' variant='heading-sm'>{name}</Typography>
      </div>
    </div>
  );
};
