import { RootState } from '@/app/store';
import { IComic } from '@/modules/comics';

export const getComics = (state: RootState) => state.comics.comics;
export const getComic = (state: RootState) => state.comics.comic;

export const getComicsByParam =
  (searchIn: keyof IComic, value: string) =>
    (state: RootState) => state.comics.comics.filter(comic => {
        return (
          comic[searchIn] === value
          || comic[searchIn]
            .toString()
            .includes(value)
        );
      },
    );