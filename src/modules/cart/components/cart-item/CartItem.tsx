import React from 'react';

import { Box, Button, Typography } from '@/components/shared';

import deleteIcon from '@/assets/icons/delete-icon.svg';

import './CartItem.scss';

interface ICartItemProps {
  /** It's cart item id  */
  id: number;
  /** It's cart item image path */
  itemImageSrc: string;

  /** It's cart item title */
  title: string;

  /** It's quantity of item*/
  quantity: number;

  /** It's price of item */
  price: number;

  /** It's function which deletes item */
  onClickDelete: (id: number) => void;
}

export const CartItem: React.FC<ICartItemProps> =
  ({
     id,
     itemImageSrc,
     title,
     quantity,
     price,
     onClickDelete,
   }) => {

    const handleDeleteClick = () => {
      onClickDelete(id);
    };

    return (
      <Box className='cart-item'
           paddingBlock={13}
           paddingInline={30}
           borderRadius={10}>
        <img className='cart-item__image' src={itemImageSrc} />
        <div className='cart-item__content'>
          <div className='cart-item__title'>
            <Typography variant='heading-md'
                        as='h4'
                        weight='bold'>{title}</Typography>
          </div>
          <span className='cart-item__quantity'>x{quantity}</span>
        </div>
        <div className='cart-item__price'>
          <Typography variant='heading-sm'
                      weight='black'>${price.toFixed(2)}</Typography>
          <Button modifiers={['white', 'rounded']}
                  icon={deleteIcon}
                  iconSize={20}
                  onClick={handleDeleteClick} />
        </div>
      </Box>
    );
  };
