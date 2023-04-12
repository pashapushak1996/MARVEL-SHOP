import moment from 'moment';

import { ImageSizesEnum } from '@/constants/image-sizes.enum';
import { buildImagePath } from '@/helpers';

import { IComic, IComicsResponse } from '../types';

/** Function which transforms comicObject */

const normalizeComic = (comic: IComicsResponse): IComic => {
  const { pageCount, thumbnail, prices, title, id, description, dates } = comic;

  const onSaleDate = dates.find(obj => obj.type === 'onsaleDate');

  let date = '';

  if (onSaleDate) {
    date = moment(onSaleDate.date).format('D/M/Y');
  }


  const cover =
    buildImagePath(thumbnail.path, ImageSizesEnum.XLARGE_SIZE, thumbnail.extension);

  const price = prices[0].price;

  return ({ pages: pageCount, price, cover, title, id, description, date });
};


export { normalizeComic };
