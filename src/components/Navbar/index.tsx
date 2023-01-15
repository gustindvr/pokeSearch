import React from 'react';

import './index.css';

const Navbar = () => {
  return (
    <div className='container-navbar'>
      <img src='/principal.jpg' />
      <div className='container-text'>
        Buscá tu pokemon favorito y lee toda la información sobre él.
      </div>
    </div>
  );
};

export default Navbar;
