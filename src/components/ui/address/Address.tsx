import React from 'react';

import iconSrc from '../../../assets/icons/address-icon.svg';

import './Address.scss';

import { Icon } from '../icon';
import { Typography } from '../typography';
import { DeliveryAddress } from './DeliveryAddress';
import { IDeliveryAddress } from '../../../models';
import { Box } from '../box';


export interface IAddressProps {
  /** This is User Name*/
  userName: string;

  /** This is User Location*/
  userLocation: IDeliveryAddress;

  /** This is User Phone*/

  userPhone: string;

  /** This is onClick handler */

  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}


export const Address: React.FC<IAddressProps> = ({
                                                   userLocation,
                                                   userPhone,
                                                   userName,
                                                   onClick,
                                                 }) => {

  return (
    <Box borderRadius={35}>
      <div className='address'>
        <div className='address__header'>
          <div className='address__username'>
            <Typography size={12}>{userName}</Typography>
          </div>
          <div className='address__icon'>
            <Icon onClick={onClick} iconSrc={iconSrc} height={18} width={18} iconAlt='address icon' />
          </div>
        </div>
        <div className='address__body'>
          <DeliveryAddress userLocation={userLocation} userPhone={userPhone} />
        </div>
      </div>
    </Box>
  );
};




