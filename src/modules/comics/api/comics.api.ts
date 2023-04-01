/** It's function which gets all comics
 @param {limit:number} params - limit is the quantity of comics
 @param {offset:number} params - offset is how many comics should be skip
 @returns {Array} results - It's array with comics
 */
import { marvelApiInstance } from '../../../api/marvelApi/marvel.api';


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

export const getComicById = async (id: string) => {
  try {
    const res = await marvelApiInstance.get(`/comics/${id}`);

    return res.data.data.results;
  } catch (e) {
    throw new Error('error');
  }
};