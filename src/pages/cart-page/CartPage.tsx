import { useNavigate } from 'react-router-dom';

import { Container } from '@/components/layout';
import { Button, Typography } from '@/components/shared';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { cartActions, cartSelectors } from '@/modules/cart';
import { CartItem } from '@/modules/cart/components/cart-item';
import { CheckoutBox } from '@/modules/cart/components/checkout-box/CheckoutBox';

import './CartPage.scss';

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(cartSelectors.getCartItems);
  const onDeleteItem = (id: number) => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  const totalSum = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2);

  const renderCartItems = () => {
    if (!cartItems.length) {

      return <div>
        <Typography variant={'heading-md'}
                    as={'h5'}
                    weight={'semi-bold'}>There aren&apos;t any items yet,
          <br /> Please choose your best comics</Typography>
        <div style={{ marginTop: 20 }}>
          <Button onClick={() => navigate('/comics')}>GO TO COMICS</Button>
        </div>
      </div>;
    }
    return cartItems.map((cartItem) => <CartItem
      key={cartItem.id}
      id={cartItem.id}
      itemImageSrc={cartItem.cover}
      title={cartItem.title}
      quantity={cartItem.quantity}
      price={cartItem.price * cartItem.quantity}
      onClickDelete={onDeleteItem}
    />);
  };


  return (
    <div className='cart-page'>
      <Container>
        <div className='cart-page__title'>
          <Typography variant={'heading-lg'} weight={'bold'} as={'h3'}>CART</Typography>
        </div>
        <div className='cart-page__content'>
          <div className='cart-page__list'>{renderCartItems()}</div>
          <div className='cart-page__actions'>
            <CheckoutBox totalSum={Number(totalSum)} onClickCheckout={() => {
              console.log('hit the checkout button');
            }} />
          </div>
        </div>
      </Container>
    </div>
  );
};