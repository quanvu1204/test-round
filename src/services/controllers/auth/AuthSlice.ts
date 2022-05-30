import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.username = 'Quan Vu';
    },
    loginError: (state) => {
      state.errorMessage = 'Error';
    },
  },
});

export const { loginSuccess, loginError } = authSlice.actions;

export default authSlice.reducer;
