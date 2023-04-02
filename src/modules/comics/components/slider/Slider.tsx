import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.scss';

import SwiperCore, {
  Pagination,
} from 'swiper';

SwiperCore.use([Pagination]);

import { SliderCard } from './slider-card';
import { IComic } from '../../types';
import { Loader } from '@/components/shared';


interface ISliderProps {
  /** It will be rendered like a Slide Item */
  comics: Array<IComic>;
}

export const Slider: React.FC<ISliderProps> = ({ comics }) => {
  if (!comics.length) {
    return <Loader />;
  }

  return (
    <Swiper
      spaceBetween={45}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {comics.map((item) =>
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

