import { IComic, IComicsResponse } from '../models';
import { ImageSizesEnum } from '../constants/imageSizes.enum';

import moment from 'moment';


/** Function which create image url */

const buildImagePath = (path: string, size: string, extension: string) => {
  return `${path}/${size}.${extension}`;
};

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


export { buildImagePath, normalizeComic };
