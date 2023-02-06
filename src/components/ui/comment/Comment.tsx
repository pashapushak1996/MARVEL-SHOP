import React from 'react';

import { IComment, IUser } from '../../../models';
import { Badge } from '../badge';
import { Rating } from 'react-simple-star-rating';
import { Avatar } from '../avatar';

import './Comment.scss';

interface ICommentProps {
  comment: IComment;
}


export const Comment: React.FC<ICommentProps> = ({ comment }) => {
  const { body, createdAt, rating } = comment;

  /* TODO Create request to server to get user from Database */

  const user: IUser = {
    firstName: 'Yoann',
    lastName: 'TERUEL',
    userPhoto: 'http://thispix.com/wp-content/uploads/2015/06/portrait-profile-012.jpg',
    role: 'user',
    email: 'pasdsad',
  };

  const isAdmin = user.role === 'admin';

  return (
    <div className='comment'>
      <div className='comment__header'>
        <div className='comment__avatar'>
          <Avatar avatarSrc={user.userPhoto} width={32} height={32} />
        </div>
        <div className='comment__user-name'>
          {user.firstName} {user.lastName}
        </div>
        {isAdmin && <div className='comment__badge'>
          <Badge label={'Admin'} />
        </div>}
        <div className='comment__time'>
          {createdAt}
        </div>
        {!isAdmin && <div className='comment__rating'>
          <Rating size={18} initialValue={rating} readonly />
        </div>}
      </div>
      <div className='comment__body'>{body}</div>
    </div>
  );
};
