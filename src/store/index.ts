import { configureStore } from '@reduxjs/toolkit';
import pokemonSlices from './Slices/pokemon';
import pokemonsSlices from './Slices/pokemons';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlices,
    pokemon: pokemonSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
