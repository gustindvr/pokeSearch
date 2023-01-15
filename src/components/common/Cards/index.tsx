import {
  CardContent,
  CardMedia,
  CircularProgress,
  Collapse,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';

import { useAppSelector } from '../../../hooks/redux';

import './index.css';
import ButtonUI from '../button';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setSelectedPokemon: Dispatch<SetStateAction<number>>;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
};

const PokeCard = (props: Props) => {
  const { setSelectedPokemon, setIsSelected } = props;

  const { pokemon } = useAppSelector((state) => state?.pokemon);

  const handleMoreInfo = (id: number) => {
    setSelectedPokemon(id);
    setIsSelected(true);
  };

  return (
    <div className='container-cards'>
      {pokemon?.map((poke) => (
        <motion.div whileHover={{ scale: 1.1 }}>
          <Card key={poke?.id}>
            <Typography className='title-name-poke'>{poke?.name}</Typography>
            <CardMedia
              component='img'
              height='150'
              width='100'
              image={
                (poke?.sprites?.front_default || poke?.sprites?.front_shiny) ??
                '/poke-common.jpg'
              }
              alt={`imagen de pokemon: ${poke?.name}`}
            />
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                Tipo: {poke?.types[0]?.type?.name}
              </Typography>
            </CardContent>

            <Collapse in={true} timeout='auto' unmountOnExit>
              <CardContent>
                <Typography paragraph>Altura: {poke?.height}</Typography>
                <Typography paragraph>Peso: {poke?.weight}</Typography>
                <ButtonUI
                  variant='secondary'
                  text='Ver más'
                  onClick={() => handleMoreInfo(poke?.id)}
                />
              </CardContent>
            </Collapse>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default PokeCard;
