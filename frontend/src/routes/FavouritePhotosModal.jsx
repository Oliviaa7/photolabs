import React from 'react';
import PhotoList from 'components/PhotoList';

import closeSymbol from '../assets/closeSymbol.svg';

const FavouritePhotosModal = ({ favourites, closeModal }) => {
  console.log('Rendering modal with favourites:', favourites);
  return (
    <div className='favourites-modal'>
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {favourites.length > 0 ? (

        <div className='favourites-modal__images'>
          {favourites.map((photo) => {
            const photoData = photo.id;
            return (
              <div key={photoData.id} className='favourite-item'>
                <img src={photoData.urls.regular} alt="Favourite photo" className='photo-img' />
              </div>
            );
          })}
        </div>
      ) : (
        <p>No favourites yet!</p>
      )}

    </div>
  );
};

export default FavouritePhotosModal;