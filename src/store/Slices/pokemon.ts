import { createSlice } from '@reduxjs/toolkit';
import {
  Abilities,
  Form,
  GameIndices,
  HeldItems,
  Moves,
  PastTypes,
  Species,
  Sprites,
  Stats,
  Types,
} from '../interfaces/interfaces';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<Abilities>;
  forms: Array<Form>;
  game_indices: Array<GameIndices>;
  held_items: Array<HeldItems>;
  location_area_encounters: string;
  moves: Array<Moves>;
  species: Species;
  sprites: Sprites;
  stats: Array<Stats>;
  types: Array<Types>;
  past_types: Array<PastTypes>;
}
[];

export interface initialData {
  pokemon: Array<Pokemon>;
  loading: boolean;
  error: Record<string | number, string | number>;
}

export const initialState: initialData = {
  pokemon: [],
  loading: false,
  error: {
    message: '',
    status: 0,
  },
};

export const pokemonSlices = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = [...state.pokemon, action.payload];
    },
    removePokemon: (state, action) => {
      state.pokemon = initialState.pokemon;
    },

    setError: (state, action) => {
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

export const { setPokemon, setError, removeError } = pokemonSlices.actions;
export default pokemonSlices.reducer;
