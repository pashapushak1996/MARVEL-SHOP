import { generateUrl } from '../helpers';

export const comicsService = {
  getAllComics: async (limit?: number, randomOffset?: boolean) => {
    const url = generateUrl('comics', limit, randomOffset);

    const res = await fetch(url);

    const { data} = await res.json();

    return data.results;
  },
};
