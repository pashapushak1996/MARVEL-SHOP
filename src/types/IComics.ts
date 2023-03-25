export interface IComicsResponse {
  id: number;
  title: string;
  pageCount: number;
  prices: Array<{ type: string, price: number }>;
  description: string;
  thumbnail: {
    extension: string,
    path: string;
  };
  dates: Array<{ type: string, date: string }>;
}

export interface IComic {
  id: number;
  title: string;
  price: number;
  description: string;
  cover: string;
  pages: number;
  date: string;
}
