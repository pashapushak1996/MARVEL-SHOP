import React from 'react';
import cn from 'classnames';

import './ActionBox.scss';
import { Button, Typography, Box } from '../index';
import { IComic } from '@/modules/comics';

interface IOrderBoxProps {
  /** Price of item*/
  price: number;

  /** AddToCard Button onClick handler*/
  onClickAddToCart?: () => void;

  /** BuyNow Button onClick handler*/
  onClickBuyNow?: () => void;

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

  const handleOnAddToCartClick = () => {
    if (onClickAddToCart){
      onClickAddToCart()
    }
  }


  return (
    <Box className='action-box'
         paddingBlock={13}
         paddingInline={13}
         borderRadius={10}>
      <div className='action-box__price'>
        <Typography as={'p'} variant={'heading-md'}>${price}</Typography>
      </div>
      <div className='action-box__availability'>
        <div className={checkmarkClassName}></div>
        <div className='action-box__availability-text'>{availabilityContent}</div>
        {isOnSale}
      </div>
      <Button modifiers={['stretched']} onClick={handleOnAddToCartClick}>Add to card</Button>
      <Button modifiers={['stretched', 'white']} onClick={() => onClickBuyNow}>Buy now</Button>
    </Box>
  );
};
