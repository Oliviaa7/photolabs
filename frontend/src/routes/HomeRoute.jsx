import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import FavouritePhotosModal from 'routes/FavouritePhotosModal';


import '../styles/HomeRoute.scss';


const HomeRoute = ({ photos, topics, favourites, toggleFavourite, onPhotoClick, onTopicClick, selectedPhoto, onClosePhotoDetailModal, onFavClick, modalType }) => {
console.log('Current modalType:', modalType); // This will log what modal type is set
  // Variable for favouriting within modal
  const isFavourite = favourites.some(photo => photo.id === selectedPhoto?.photoId);

  return (
    <div className="home-route">

      <TopNavigationBar
      topics={topics}
      favourites={favourites}
      onTopicClick={onTopicClick}
      onFavClick={onFavClick}
      />

      <PhotoList
      photos={photos}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
      onPhotoClick={onPhotoClick} 
      />

      {modalType === 'photoDetails' && (
        <PhotoDetailsModal
        photos={photos}
        photoDetails={selectedPhoto}
        closeModal={onClosePhotoDetailModal}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={isFavourite}
        onPhotoClick={onPhotoClick}
        />
      )}

      {modalType === 'favourites' && (
        <FavouritePhotosModal
        favourites={favourites}
        closeModal={onClosePhotoDetailModal}
         />
      )}

    </div>
  );
};

export default HomeRoute;
