import { generateUrl } from '../helpers';


export const charactersService = {
  getAllCharacters: async (limit?: number) => {

    const url = generateUrl('characters', limit, true);

    const res = await fetch(url);

    const { data } = await res.json();

    return data.results;
  },
};
