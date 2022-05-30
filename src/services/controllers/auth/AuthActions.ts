import { createAction } from '@reduxjs/toolkit';

export const authActions = {
  login: createAction<{ username: string; password: string }>('auth/LOGIN'),
};
