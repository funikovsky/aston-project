import { createSlice } from '@reduxjs/toolkit';

interface InitialStateInterface {
  theme: string;
  checked: boolean;
}

const initialState: InitialStateInterface = {
  theme: '',
  checked: false,
};

export const ThemeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme ? '' : 'dark';
    },
    toggleChecked: (state) => {
      state.checked = !state.checked;
    },
  },
});

export const { toggleTheme, toggleChecked } = ThemeSlice.actions;
export default ThemeSlice.reducer;
