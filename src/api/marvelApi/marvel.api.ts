import axios from 'axios';

import { getHash } from './cryptoMd5.service';

import { MARVEL_BASE_URL, MARVEL_API_KEY, MARVEL_API_PRIVATE_KEY } from './marvelApiConstants';

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

/** It's function which gets all comics
 @param {limit:number} params - limit is the quantity of comics
 @param {offset:number} params - offset is how many comics should be skip
 @returns {Array} results - It's array with one comic
 */


export const getAllComics = async (params?: { limit?: number, offset?: number }) => {
  try {
    const res = await marvelApiInstance.get('/comics', { params });

    return res.data.data.results;
  } catch (e) {
    throw new Error('error');
  }
};

/** It's function which gets one comic by id
 @param {number} id - It's comic id
 @returns {Array} results - It's array with one comic
 */

export const getComicById = async (id: number) => {
  try {
    const res = await marvelApiInstance.get(`/comics/${id}`);

    return res.data.data.results;
  } catch (e) {
    throw new Error('error');
  }
};


/** It's function which gets all characters
 @param {limit:number} params - limit is the quantity of comics
 @param {offset:number} params - offset is how many comics should be skip
 @returns {Array} results - It's an array with one comic
 */

export const getAllCharacters = async (params?: { limit?: number, offset?: number }) => {
  try {
    const res = await marvelApiInstance.get('/characters', { params });

    return res.data.data.results;
  } catch (e) {
    throw new Error('error');
  }
};
