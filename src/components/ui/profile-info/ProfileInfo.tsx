import React from 'react';

import { Button, Typography } from '../../shared';
import { Avatar } from '../../shared/avatar';

import './ProfileInfo.scss';

interface IProfileInfoProps {
  user: { firstName: string, lastName: string, userPhoto: string };
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
        {/* Todo that shit should be reworked */}
        {/* <Typography size={36}>{firstName} {lastName}</Typography> */}
        <span className='profile-info__number'>#1651651651465</span>
        <Button onClick={onClickEdit}>Edit my profile</Button>
      </div>
    </div>
  );
};
