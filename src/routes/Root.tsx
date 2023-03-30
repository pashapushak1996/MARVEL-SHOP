import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthModal } from '../components/module/auth';

export const Root = () => {
  return (
    <>
      <Outlet />
      <AuthModal />
    </>
  );
};