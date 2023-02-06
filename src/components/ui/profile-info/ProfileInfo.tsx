import React from 'react';

import { Typography } from '../typography';
import { Button } from '../button';
import { Avatar } from '../avatar';
import { IUser } from '../../../models';

import './ProfileInfo.scss';

interface IProfileInfoProps {
  user: IUser;
  onClickEdit?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ProfileInfo: React.FC<IProfileInfoProps> = ({ user, onClickEdit }) => {
  const { firstName, lastName, userPhoto } = user;

  return (
    <div className='profile-info'>
      <div className='profile-info__avatar'>
        <Avatar avatarSrc={userPhoto}
                width={197}
                height={197} />
      </div>
      <div className='profile-info__body'>
        <Typography className='profile-info__name' size={36}>{firstName} {lastName}</Typography>
        <span className='profile-info__number'>#1651651651465</span>
        <Button onClick={onClickEdit}>Edit my profile</Button>
      </div>
    </div>
  );
};
