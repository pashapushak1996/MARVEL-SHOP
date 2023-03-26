import { ICharacter, IComic, IComicsResponse } from './types';
const comicsExample: IComic = {
  pages: 0,
  id: 1,
  title: 'Avengers Universe',
  price: 4.99,
  description: 'Dernier round pour déterminer qui parmi les Avengers sera le nouvel hôte du Phénix, dans les deux derniers chapitres de la saga Voici le Phénix ! Et un Donald Blake devenu fou affronte Jane Foster, son ancien amour, devenue Valkyrie !',
  cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dccomics.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2FACSMBP_Cvr.jpg&f=1&nofb=1&ipt=4a2c259123f1815e5c9e84d82c140051d50b6779d2042ff7899cdc56321a1e35&ipo=images',
  date: '',
};

export const comicsResponseExample: IComicsResponse = {
  'id': 59548,
  'title': 'Old Man Logan (2016) #8 (Albuquerque Mighty Men Variant)',
  'description': '',
  'pageCount': 32,
  'dates': [
    {
      'type': 'onsaleDate',
      'date': '2029-12-31T00:00:00-0500',
    },
  ],
  'prices': [
    {
      'type': 'printPrice',
      'price': 3.99,
    },
  ],
  'thumbnail': {
    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
    'extension': 'jpg',
  },
};

const heroContentExample = {
  title: 'All Marvel Comics in one place',
  description: 'Welcome to Super-Heroes Shop specialized in Marvel Comics. You will find in the shelves of our shop all your favorite super heroes: Spider-Man, Iron Man, Avengers, X-men, Fanstastic 4...',
  quote: '“With great power comes great responsibility”',
  quoteAuthor: 'Benjamin Parker (aka Uncle Ben)',
};

const character: ICharacter = {
  id: 2,
  name: 'Spiderman',
  description: 'asdsad',
  cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dccomics.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2FACSMBP_Cvr.jpg&f=1&nofb=1&ipt=4a2c259123f1815e5c9e84d82c140051d50b6779d2042ff7899cdc56321a1e35&ipo=images',
  comics: '',
};

const charactersArray = [character, character, character, character, character];

const arrayOfComics = [comicsExample, comicsExample, comicsExample, comicsExample, comicsExample, comicsExample, comicsExample, comicsExample];

export { heroContentExample, comicsExample, arrayOfComics, charactersArray };
