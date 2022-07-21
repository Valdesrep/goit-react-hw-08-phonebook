import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, registerUser, fetchCurrentUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggetIn: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggetIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggetIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggetIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggetIn = true;
    },
  },
});
export default auth.reducer;
