import { API_KEY, API_PRIVATE_KEY, BASE_URL } from '../constants/api.constant';
import { getHash } from '../services/cryptoMd5.service';
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

  const price = prices[0] ? prices[0].price : null;

  return ({ pages: pageCount, price, cover, title, id, description, date });
};

/** Function which creates url which can be used in fetch or axios */

const generateUrl = (endpoint: string,
                     id?: number | string | null,
                     limit?: number,
                     randomOffset?: boolean): string => {

  const itemId = id !== null ? `/${id}` : '';

  const url = `${BASE_URL}/v1/public/${endpoint}${itemId}`;


  const ts = Date.now().toString();

  const hash = getHash(ts, API_PRIVATE_KEY, API_KEY);

  const offset = randomOffset ? Math.round(Math.random() * 1000) : '';

  let urlWithApiKey = `${url}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`;

  if (limit) {
    urlWithApiKey += `&limit=${limit}`;
  }

  if (offset) {
    urlWithApiKey += `&offset=${offset}`;
  }

  return urlWithApiKey;
};

export { buildImagePath, generateUrl, normalizeComic };
