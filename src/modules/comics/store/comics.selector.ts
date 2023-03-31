import { RootState } from '../../../app/store';

export const getComics = (state: RootState) => state.comics.comics;
export const getOneComic = (comicId: number) => (state: RootState) => state.comics.comics.find(comic => comic.id === comicId);
