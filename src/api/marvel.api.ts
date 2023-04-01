import axios from 'axios';

import { getHash } from './cryptoMd5.service';

import { MARVEL_BASE_URL, MARVEL_API_KEY, MARVEL_API_PRIVATE_KEY } from '../constants/marvel-api.constants';

type TypeMarvelApiParams = {
  apikey: string;
  hash: string;
  ts: string;
}

/** Function which generate required params which MarvelAPI needs */

export const generateApiParams = (): TypeMarvelApiParams => {
  const ts = Date.now().toString();

  const hash = getHash(ts, MARVEL_API_PRIVATE_KEY, MARVEL_API_KEY);

  return { apikey: MARVEL_API_KEY, hash, ts };
};

/** It is an instance of axios  */

export const marvelApiInstance = axios.create({
  baseURL: MARVEL_BASE_URL,
  params: {
    ...generateApiParams(),
  },
});