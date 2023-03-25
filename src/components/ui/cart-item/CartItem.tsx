import React from 'react';
import { Box, Typography } from '../../shared';

import './CartItem.scss';

interface ICartItemProps {
  /** It's cart item image path */
  itemImageSrc: string;

  /** It's cart item title */
  title: string;

  /** It's quantity of item*/
  quantity: number;

  /** It's price of item */
  price: number;
}

export const CartItem: React.FC<ICartItemProps> = ({
                                                     itemImageSrc,
                                                     title,
                                                     quantity,
                                                     price,
                                                   }) => {
  return (
    <Box className='cart-item'
         paddingBlock={13}
         paddingInline={30}
         borderRadius={10}>
      <img className='cart-item__image' src={itemImageSrc} />
      <div className='cart-item__content'>
        <Typography className='cart-item__title'
                    size={16}
                    variant='h4'
                    weight={500}>{title}</Typography>
        <span className='cart-item__quantity'>x{quantity}</span>
      </div>
      <Typography className='cart-item__price'
                  size={16}
                  weight={500}>${price}</Typography>
    </Box>
  );
};
