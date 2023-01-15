import { Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  setErrorPokemons,
  setPokemon,
  setPokemons,
} from '../../../api/services/setPokemons';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Pokemones } from '../../../store/Slices/pokemons';

import ButtonUI from '../../common/button';
import SearchInput from '../../common/Input';

import './index.css';

type Props = {
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

const Search = (props: Props) => {
  const { setIsSelected } = props;
  const [textValue, setTextValue] = useState<string>('');
  const [filterPokemon, setFilterPokemon] = useState<Array<Pokemones>>([]);
  const { pokemones, error } = useAppSelector((state) => state?.pokemons);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPokemons());
  }, []);

  const searchPokemon = (e: string) => {
    setTextValue(e);
  };

  const handleFilterPokemon = () => {
    setIsSelected(false);
    setFilterPokemon((filterPokemon) => []);
    if (textValue.length < 2) {
      dispatch({
        type: 'pokemons/setError',
        payload: {
          message: 'Se deben escribir al menos 2 caracteres',
        },
      });
    } else {
      dispatch({
        type: 'pokemons/setError',
        payload: {
          message: '',
        },
      });
      pokemones?.map((poke) => {
        if (poke?.name.includes(textValue)) {
          setFilterPokemon((filterPokemon) => [...filterPokemon, poke]);
        }
      });
    }
  };

  const filteredPokemons = () => {
    if (textValue.length >= 2) {
      dispatch(setPokemon(filterPokemon));
    }
  };

  useEffect(() => {
    filteredPokemons();
  }, [filterPokemon]);

  return (
    <div className='container-search'>
      <SearchInput
        textValue={textValue}
        setTextValue={setTextValue}
        searchPokemon={searchPokemon}
      />
      {error.message !== '' && (
        <Typography variant='subtitle2' color='#c16428'>
          Se deben escribir al menos 2 letras
        </Typography>
      )}
      <ButtonUI
        text='Buscar'
        variant={'principal'}
        onClick={handleFilterPokemon}
      />
    </div>
  );
};

export default Search;
