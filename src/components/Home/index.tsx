import { CircularProgress, Skeleton } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import PokeCard from '../common/Cards';
import PokemonDetail from '../PokemonDetail';
import Search from './Search';

type Props = {};

const Home = (props: Props) => {
  const [selectedPokemon, setSelectedPokemon] = useState<number>(0);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <Search setIsSelected={setIsSelected} />
      {isSelected ? (
        <PokemonDetail
          selectedPokemon={selectedPokemon}
          setIsSelected={setIsSelected}
        />
      ) : (
        <PokeCard
          setSelectedPokemon={setSelectedPokemon}
          setIsSelected={setIsSelected}
        />
      )}
    </div>
  );
};

export default Home;
