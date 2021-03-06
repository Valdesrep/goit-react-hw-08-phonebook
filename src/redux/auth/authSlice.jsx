import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, registerUser, fetchCurrentUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefresh = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefresh = false;
    },
  },
});
export default auth.reducer;
