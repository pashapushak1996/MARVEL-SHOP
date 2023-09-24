import React from 'react';

import cartIcon from '@/assets/icons/cart-icon.svg';

import './CartIcon.scss';

interface CartIconProps {
  cartItemsCount: number;
  onClick: () => void;
}

export const CartIcon: React.FC<CartIconProps> = ({ cartItemsCount, onClick }) => {
  return (
    <div className='cart-icon' onClick={onClick}>
      {!!cartItemsCount && <div className='cart-icon__badge'>{cartItemsCount}</div>}
      <img src={cartIcon} alt='cart-icon__icon' />
    </div>
  );
};