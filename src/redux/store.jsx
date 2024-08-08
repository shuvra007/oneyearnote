import { configureStore } from '@reduxjs/toolkit';
import notereducer from './noteSlice';

export const store = configureStore({
  reducer: {
    
    note: notereducer,  

  },
});

