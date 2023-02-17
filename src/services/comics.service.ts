import { generateUrl } from '../helpers';

export const comicsService = {
  getAllComics: async (limit?: number, randomOffset?: boolean) => {
    const url = generateUrl('comics', null, limit, randomOffset);

    const res = await fetch(url);

    const { data } = await res.json();

    return data.results;
  },
  getComicById: async (id: string | number) => {
    const url = generateUrl('comics', id);

    const res = await fetch(url);

    const { data } = await res.json();

    return data.results;
  },
};
