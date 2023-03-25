import React from 'react';

import loaderSvg from '../../../assets/loader.svg';

export const Loader = () => {
  return (
    <div className='loader'>
      <img src={loaderSvg} alt={'loading'} width={60} height={60}/>
    </div>
  );
};
