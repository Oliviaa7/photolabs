import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = function( { onClick, selected }) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={onClick}>
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;