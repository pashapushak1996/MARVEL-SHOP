import React from 'react';

import loaderSvg from '../../../assets/loader.svg';

export const Loader = () => {
  return (
    <div className='loader'>
      <img src={loaderSvg} alt={'loading'} width={50} height={50}/>
    </div>
  );
};
