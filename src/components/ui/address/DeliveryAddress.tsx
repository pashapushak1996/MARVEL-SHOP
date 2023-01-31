import React from 'react';
import { Typography } from '../typography';
import { IAddressProps } from './Address';

/* There I used type because of Omit feature */

type TypeDeliveryProps = Omit<IAddressProps, 'userName' | 'onClick'>;


export const DeliveryAddress: React.FC<TypeDeliveryProps> = ({
                                                               userLocation,
                                                               userPhone,
                                                             }) => {

  const { street, country, zipCode, city } = userLocation;

  return (
    <>
      <div className='address__street'>
        <Typography size={12} weight={400}>{street}</Typography>
      </div>
      <div className='address__state'>
        <Typography size={12} weight={400}>{country}</Typography>
      </div>
      <div className='address__city'>
        <Typography size={12} weight={400}>{city},{zipCode}</Typography>
      </div>
      <div className='address__phone'>
        <Typography size={12} weight={400}>Phone:{userPhone}</Typography>
      </div>
    </>
  );
};
