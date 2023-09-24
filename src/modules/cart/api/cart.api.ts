import { addDoc, collection } from 'firebase/firestore';
import { firestoreDb } from '@/firebase';

import { ICartItem } from '@/modules/cart/types/ICartItem';

export const cartApi = {
  saveToCart: async (cartItem: ICartItem) => {
    try {
      const docRef = await addDoc(collection(firestoreDb, 'cart'), cartItem);


    } catch (e) {
      console.log(e);
    }
  },
};