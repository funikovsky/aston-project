import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateInterface {
  email: string | null;
  idOfCurrentUser: string | null;
}

const initialState: InitialStateInterface = {
  email: null,
  idOfCurrentUser: null,
};

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<InitialStateInterface>) {
      state.email = action.payload.email;
      state.idOfCurrentUser = action.payload.idOfCurrentUser;
    },
    removeUser(state) {
      state.email = null;
      state.idOfCurrentUser = null;
    },
  },
});

export const { setUser, removeUser } = AuthSlice.actions;
export default AuthSlice.reducer;
