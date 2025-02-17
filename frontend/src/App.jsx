import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';

const App = () => {

  const {
    state: { favourites, selectedPhoto, showModal, photoData, topicData },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailModal,
  } = useApplicationData();

  const isFavourite = favourites.some(photo => photo.id === selectedPhoto?.photoId);


  return (

    <div className="App">
      <HomeRoute 
      photos={photoData}
      topics={topicData}
      favourites={favourites}
      toggleFavourite={updateToFavPhotoIds}
      onPhotoClick={onPhotoSelect}
      />

      {showModal && (
        <PhotoDetailsModal
        photos={photoData}
        photoDetails={selectedPhoto}
        closeModal={onClosePhotoDetailModal}
        favourites={favourites}
        toggleFavourite={updateToFavPhotoIds}
        isFavourite={isFavourite}
        onPhotoClick={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;
