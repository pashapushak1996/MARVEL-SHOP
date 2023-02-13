export interface IComicsResponse {
  id: string;
  title: string;
  prices: Array<{ type: string, price: number }>;
  rating: number;
  description: string;
  thumbnail: {
    extension: string,
    path: string;
  };
}

export interface IComics {
  id: string;
  title: string;
  price: number;
  rating: number;
  description: string;
  cover: string;
}
