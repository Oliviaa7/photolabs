import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from "mocks/topics";
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';

const App = () => {

  const {
    state: { favourites, selectedPhoto, showModal },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailModal,
  } = useApplicationData();

  const isFavourite = favourites.includes(selectedPhoto?.photoId);


  return (

    <div className="App">
      <HomeRoute photos={photos}
      topics={topics}
      favourites={favourites}
      toggleFavourite={updateToFavPhotoIds}
      onPhotoClick={onPhotoSelect}
      />

      {showModal && (
        <PhotoDetailsModal
        photos={photos}
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
