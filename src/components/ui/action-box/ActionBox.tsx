import React from 'react';
import { Box } from '../box';

import './ActionBox.scss';
import { Button, Typography } from '../index';
import cn from 'classnames';

interface IOrderBoxProps {
  /** Price of item*/
  price: number;

  /** AddToCard Button onClick handler*/
  onClickAddToCart?: (id: number) => void;

  /** BuyNow Button onClick handler*/
  onClickBuyNow?: (id: number) => void;

  /** Availability of item */
  isOnSale: boolean;
}

export const ActionBox: React.FC<IOrderBoxProps> = ({
                                                      price,
                                                      isOnSale,
                                                      onClickAddToCart,
                                                      onClickBuyNow,
                                                    }) => {
  const availabilityContent = isOnSale ? 'In stock' : 'Not available';

  const checkmarkClassName = cn(
    'action-box__availability-checkmark',
    { ['action-box__availability-checkmark--is-available']: isOnSale });


  return (
    <Box className='action-box'
         paddingBlock={13}
         paddingInline={13}
         borderRadius={10}>
      <Typography className='action-box__price'
                  size={24}
                  weight={500}>${price}</Typography>
      <div className='action-box__availability'>
        <div className={checkmarkClassName}></div>
        <div className='action-box__availability-text'>{availabilityContent}</div>
        {isOnSale}
      </div>
      <Button modifiers={['stretched']} onClick={() => onClickAddToCart}>Add to card</Button>
      <Button modifiers={['stretched', 'white']} onClick={() => onClickBuyNow}>Buy now</Button>
    </Box>
  );
};
