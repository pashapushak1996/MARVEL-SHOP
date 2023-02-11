import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.scss';

import SwiperCore, {
  Pagination,
} from 'swiper';

SwiperCore.use([Pagination]);

import { IComics } from '../../../models';
import { SliderCard } from './slider-card';


interface ISliderProps {
  /** It will be rendered like a Slide Item */
  items: Array<IComics>;

  /** It's a function which will be called when button is clicked */
  onClickDetails?: (event: React.MouseEvent) => void;
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

