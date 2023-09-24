import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { authSelectors, setIsOpen, setModalType } from '@/modules/auth/store';
import { auth } from '@/firebase';
import { useEffect } from 'react';
import { setUser } from '@/modules/auth/store/auth.slice';
import { normalizeUser } from '@/helpers/firebase.helper';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(authSelectors.getAuth);
  const user = useAppSelector(authSelectors.getUser);
  const token = localStorage.getItem('access_token');


  useEffect(() => {
    if (token){
      auth.onAuthStateChanged((user) => {
        if (user !== null) {
          const normalizedUser = normalizeUser(user);
          dispatch(setUser({ user: normalizedUser }));

          return;
        }

        dispatch(setUser({ user: null }));
        navigate('/');
        dispatch(setIsOpen(true));
        dispatch(setModalType('sign-up'));
      });
    }
  }, []);

  return { isLoggedIn, user };
};