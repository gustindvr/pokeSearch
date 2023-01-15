import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import './index.css';

type Props = {
  textValue: string;
  setTextValue: Dispatch<SetStateAction<string>>;
  searchPokemon: (e: string) => void;
};

const SearchInput = (props: Props) => {
  const { searchPokemon, setTextValue, textValue } = props;

  return (
    <input
      className='input-search'
      type='text'
      placeholder='Pikachu'
      value={textValue}
      onChange={(e) => searchPokemon(e.target.value)}
    />
  );
};

export default SearchInput;
