import React from 'react';

import { Typography, Link } from '../../../shared';

import './VerticalLinks.scss';

interface INavListItem {
  label: string,
  route: string
}


interface IVerticalLinksProps {
  /** Title of List*/
  listTitle: string;

  /** It's items which will be rendered as links*/
  itemsList: Array<INavListItem>;
}

export const VerticalLinks: React.FC<IVerticalLinksProps> = ({ listTitle, itemsList }) => {

  const list = itemsList.map((item, index) =>
    <li key={item.label + index}>
      <Link to={item.route}>{item.label}</Link>
    </li>);

  return (
    <div className='vertical-links'>
      <div className='vertical-links__title'>
        <Typography variant={'body-sm'} weight={'semi-bold'}>{listTitle}</Typography>
      </div>
      <ul className='vertical-links__list'>
        {list}
      </ul>
    </div>
  );
};
