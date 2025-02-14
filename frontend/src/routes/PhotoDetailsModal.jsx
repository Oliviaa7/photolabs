import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ photoDetails, closeModal, favourites, toggleFavourite }) => {
  const similarPhotosArray = Object.values(photoDetails.similarPhotos);

  return (
    <div className="photo-details-modal">

        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>

      <div className='photo-details-modal__images'>
        <div className='photo-details-modal__header'>
          <img src={photoDetails.imageUrl} className='photo-details-modal__image' />
          <div className='photo-details-modal__photographer-details'>
            <img src={photoDetails.userProfile} alt="photographer" className='photo-details-modal__photographer-profile' />
            <div className='photo-details-modal__photographer-info'>
              <p>{photoDetails.username}</p>
              <p className='photo-details-modal__photographer-location'>{photoDetails.location}</p>
            </div>
          </div>
        </div>
        <h4>Similar Photos</h4>
        <div className='photo-details-modal__top-bar'>
          <PhotoList
            photos={similarPhotosArray}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
