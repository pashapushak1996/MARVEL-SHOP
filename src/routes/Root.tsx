import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthModal } from '../modules/auth-modal';

export const Root = () => {
  return (
    <>
      <Outlet />
      <AuthModal />
    </>
  );
};