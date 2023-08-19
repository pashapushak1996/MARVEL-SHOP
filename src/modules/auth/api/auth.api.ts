import axios from 'axios';
import { UserLoginData } from '@/modules/auth/types';

const BASE_URL = 'http://localhost:5001';

export const authApi = {
  login: async ({ email, password }: UserLoginData) => {
    const { data } = await axios.post(`${BASE_URL}/auth`,
      { email, password });

    return data;
  },
};

