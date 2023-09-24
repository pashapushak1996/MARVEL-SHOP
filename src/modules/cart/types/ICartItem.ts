import { IComic } from '@/modules/comics';

export interface ICartItem extends IComic {
  quantity: number;
}