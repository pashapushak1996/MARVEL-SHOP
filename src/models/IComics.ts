export interface IComicsResponse {
  id: string;
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
  id: string;
  title: string;
  price: number | null;
  description: string;
  cover: string;
  pages: number;
  date: string;
}
