import { Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Api } from '../../api';
import { Pokemon } from '../../store/Slices/pokemon';

import {
  FavoriteBorder,
  Hardware,
  Shield,
  Plumbing,
  Security,
  DirectionsRun,
} from '@mui/icons-material';

import './index.css';
type Props = {
  selectedPokemon: number;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

const PokemonDetail = (props: Props) => {
  const { selectedPokemon, setIsSelected } = props;

  const [pokemon, setPokemon] = useState<Pokemon>();

  const getDataPokemon = async () => {
    const poke = await Api.get(`/v2/pokemon/${selectedPokemon.toString()}`);
    setPokemon(poke?.data);
  };

  console.log(pokemon);

  const handleGoBack = () => {
    setIsSelected(false);
  };

  const validateIcon = (name: string) => {
    switch (name) {
      case 'hp': {
        return <FavoriteBorder htmlColor='#7c1212' />;
      }
      case 'attack': {
        return <Hardware htmlColor='#7c1212' />;
      }

      case 'defense': {
        return <Shield htmlColor='#7c1212' />;
      }

      case 'special-attack': {
        return <Plumbing htmlColor='#7c1212' />;
      }

      case 'special-defense': {
        return <Security htmlColor='#7c1212' />;
      }

      case 'speed': {
        return <DirectionsRun htmlColor='#7c1212' />;
      }

      default:
        break;
    }
  };

  useEffect(() => {
    getDataPokemon();
  }, []);

  return (
    <div className='container-detail-pokemon'>
      <Typography className='name-detail-pokemon'>{pokemon?.name}</Typography>
      <div className='container-detail-image'>
        <img
          src={
            pokemon?.sprites?.front_default ||
            pokemon?.sprites?.front_shiny ||
            '/poke-common.jpg'
          }
          width={300}
          height={300}
        />
      </div>
      <div className='container-details'>
        <Typography>Id: {pokemon?.id}</Typography>
        <div className='container-abilities'>
          <Typography>Habilidades: </Typography>
          {pokemon?.abilities?.length
            ? pokemon?.abilities?.map((ability) => (
                <li>{ability?.ability?.name}</li>
              ))
            : 'No se encontraron registros'}
          <ul></ul>
        </div>

        <div className='container-game-indices'>
          <Typography>Apariciones en Juegos:</Typography>
          {pokemon?.game_indices?.length
            ? pokemon?.game_indices?.map((game) => (
                <Typography>&nbsp;{`${game?.version?.name} /`} </Typography>
              ))
            : 'No se encontraron registros'}
        </div>
        <div className='container-stats'>
          {pokemon?.stats?.map((stat) => (
            <div className='stats'>
              <Typography>{validateIcon(stat?.stat?.name)}</Typography>
              <Typography>{stat?.base_stat}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
