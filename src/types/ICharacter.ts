export interface ICharacter {
  id: number;
  name: string;
  cover: string;
}

export interface ICharacterResponse {
  id: number;
  name: string;
  description: string;
  resourceURI: string;
  modified: string;
  thumbnail: {
    extension: string,
    path: string;
  };
  events: any;
  series: any;
  stories: any;
  urls: any;
}
