import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Slider } from '../components/ui/slider';
import { IComics } from '../models';

const comicsExample: IComics = {
  id: '1',
  title: 'Avengers Universe',
  company: 'Avengers Universe',
  price: '17.99$',
  rating: 5,
  description: 'Dernier round pour déterminer qui parmi les Avengers sera le nouvel hôte du Phénix, dans les deux derniers chapitres de la saga Voici le Phénix ! Et un Donald Blake devenu fou affronte Jane Foster, son ancien amour, devenue Valkyrie !',
  cover: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dccomics.com%2Fsites%2Fdefault%2Ffiles%2Ffield%2Fimage%2FACSMBP_Cvr.jpg&f=1&nofb=1&ipt=4a2c259123f1815e5c9e84d82c140051d50b6779d2042ff7899cdc56321a1e35&ipo=images',
};

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Base: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;
Base.args = {
  items: [
    comicsExample,
    comicsExample,
    comicsExample,
    comicsExample,
  ],
};

