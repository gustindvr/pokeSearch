import { Api } from '..';
import { Dispatch } from '../../store';
import { Pokemones } from '../../store/Slices/pokemons';

export const setPokemons = () => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await Api.get('v2/pokemon', {
        params: {
          limit: 1300,
          offset: 0,
        },
      });

      if (result?.status === 200) {
        dispatch({
          type: 'pokemons/setPokemonList',
          payload: result?.data?.results,
        });
        dispatch({
          type: 'pokemons/setLoading',
          payload: false,
        });
      }
      return result;
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const setPokemon = (values: Array<Pokemones>) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: 'pokemon/removePokemon',
      });

      dispatch({
        type: 'pokemon/setLoading',
        payload: true,
      });

      values?.map(async (elem) => {
        const resp = await Api.get(`${elem.url}`);
        if (resp?.status === 200) {
          dispatch({
            type: 'pokemon/setPokemon',
            payload: resp?.data,
          });
        }
      });

      dispatch({
        type: 'pokemon/setLoading',
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setErrorPokemons = (text: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'pokemons/setError',
      payload: {
        message: text,
      },
    });
  };
};
