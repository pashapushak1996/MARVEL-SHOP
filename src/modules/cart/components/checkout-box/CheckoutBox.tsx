import { Box, Button, Typography } from '@/components/shared';

import './CheckoutBox.scss';
import React from 'react';

interface ICheckoutBoxProps {
  totalSum: number;
  onClickCheckout: () => void;
}

export const CheckoutBox: React.FC<ICheckoutBoxProps> = ({ totalSum, onClickCheckout }) => {
  return (
    <Box className='checkout-box'>
      <div className='checkout-box__title'>
        <Typography variant={'heading-sm'} as={'h5'} weight={'bold'}>Total: ${totalSum}</Typography>
      </div>
      <div className='checkout-box__button'>
        <Button onClick={onClickCheckout}>Checkout</Button>
      </div>
    </Box>
  );
};