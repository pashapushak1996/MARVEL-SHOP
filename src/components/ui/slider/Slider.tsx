import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.scss';

import SwiperCore, {
  Pagination,
} from 'swiper';

SwiperCore.use([Pagination]);

import { IComic } from '../../../types';
import { SliderCard } from './slider-card';


interface ISliderProps {
  /** It will be rendered like a Slide Item */
  items: Array<IComic>;
}

export const Slider: React.FC<ISliderProps> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={45}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {items.map((item) =>
        <SwiperSlide key={item.id}>
          <SliderCard
            id={item.id}
            imgSrc={item.cover}
            title={item.title}
            description={item.description} />
        </SwiperSlide>)}
    </Swiper>
  );
};

