import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './action';

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
