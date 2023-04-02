import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthModal } from '../modules/auth';

export const Root = () => {
  return (
    <>
      <Outlet />
      <AuthModal />
    </>
  );
};