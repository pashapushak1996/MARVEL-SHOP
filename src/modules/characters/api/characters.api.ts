/** It's function which gets all characters-list
 @param {limit:number} params - limit is the quantity of comics
 @param {offset:number} params - offset is how many comics should be skip
 @returns {Array} results - It's an array with one comic
 */
import { marvelApiInstance } from '../../../api/marvel.api';

export const getAllCharacters = async (params?: { limit?: number, offset?: number }) => {
  try {
    const res = await marvelApiInstance.get('/characters', { params });

    return res.data.data.results;
  } catch (e) {
    throw new Error('error');
  }
};
