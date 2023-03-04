import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateInterface {
  email: string | null;
  id: string | null;
}

const initialState: InitialStateInterface = {
  email: null,
  id: null,
};

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InitialStateInterface>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
