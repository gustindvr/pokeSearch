import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Pokemones {
  name: string;
  url: string;
}

export interface initialData {
  pokemones: Array<Pokemones>;
  loading: boolean;
  error: Record<string | number, string | number>;
}

export const initialState: initialData = {
  pokemones: [],
  loading: false,
  error: {
    message: '',
    status: 0,
  },
};

export const pokemonsSlices = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.loading = true;
      state.pokemones = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeError: (state, action) => {
      state.error = initialState.error;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPokemonList, setError, removeError } = pokemonsSlices.actions;
export default pokemonsSlices.reducer;
