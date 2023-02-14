import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  user: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // state.loggedIn = (action.payload && action.payload.length > 0) || false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const setToken = authSlice.actions.setToken;
export const setUser = authSlice.actions.setUser;

const AuthSlice = authSlice.reducer;
export default AuthSlice;
