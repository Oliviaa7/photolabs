import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


import '../styles/HomeRoute.scss';


const HomeRoute = ({ photos, topics, favourites, toggleFavourite, onPhotoClick, onTopicClick, showModal, selectedPhoto, onClosePhotoDetailModal }) => {

  // Variable for favouriting within modal
  const isFavourite = favourites.some(photo => photo.id === selectedPhoto?.photoId);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} onTopicClick={onTopicClick} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={onPhotoClick} />
      {showModal && (
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
    </div>
  );
};

export default HomeRoute;
