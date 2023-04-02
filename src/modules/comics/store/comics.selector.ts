import { RootState } from '@/app/store';

export const getComics = (state: RootState) => state.comics.comics;
export const getComic = (state: RootState) => state.comics.comic;