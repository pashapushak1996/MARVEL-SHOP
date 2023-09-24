import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { NavMenu } from '../nav-menu';
import { LoginButton } from '@/modules/auth';
import { Logo } from '../../shared';

import { useAppSelector } from '@/app/hooks';
import { authSelectors } from '@/modules/auth/store';
import { CartIcon } from '@/modules/cart/components/cart-icon/CartIcon';
import { Avatar } from '@/components/shared/avatar';

import defaultAvatar from '@/assets/default-avatar.jpg';

import './Header.scss';
import { cartSelectors } from '@/modules/cart';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export const Header: React.FC = () => {
  const { isLoggedIn, user } = useAuth();
  const cartItems = useAppSelector(cartSelectors.getCartItems);
  const cartItemsCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const navigate = useNavigate();
  const onCartIconClick = () => {
    navigate('/cart');
  };


  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to={'/'}>
          <Logo width={150} />
        </Link>
      </div>
      <div className='header__menu'>
        <NavMenu />
      </div>
      <div className='header__controls'>
        {isLoggedIn ?
          <div className='header__controls-user'>
            <CartIcon cartItemsCount={cartItemsCount} onClick={onCartIconClick} />
            <Avatar avatarSrc={user?.photoURL || defaultAvatar} width={40} height={40} />
          </div>
          : <LoginButton />}
      </div>
    </header>
  );
};
