import React from 'react';
import { Typography } from '../../typography';
import { Link } from '../../link';

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
      <Typography className='vertical-links__title'
                  size={12}
                  weight={500}>{listTitle}</Typography>
      <ul className='vertical-links__list'>
        {list}
      </ul>
    </div>
  );
};
