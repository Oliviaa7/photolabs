import React, { useState, useEffect } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from "mocks/topics";


import './App.scss';
import { use } from 'react';

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('State changed: ', favourites);
  }, [favourites])

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter((id) => id !== photoId)
      } else {
        return [...prevFavourites, photoId]
      }
    })
  }

  const handlePhotoClick = (photo) => {
    const photoDetails = {
      photoId: photo.id,
      imageUrl: photo.urls.regular,
      username: photo.user.name,
      userProfile: photo.user.profile,
      location: photo.location ? `${photo.location.city}, ${photo.location.country}` : "Location not available",
      similarPhotos: photo.similar_photos,
    }

    setSelectedPhoto(photoDetails);
    setShowModal(true);
  }

  const favPhoto = favourites.includes(selectedPhoto?.photoId);


  return (
    <div className="App">
      <HomeRoute photos={photos}
      topics={topics}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
      onPhotoClick={handlePhotoClick}
      />

      {showModal && (
        <PhotoDetailsModal
        photos={photos}
        photoDetails={selectedPhoto}
        closeModal={() => {setShowModal(false)}}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        isFavourite={favPhoto}
        onPhotoClick={handlePhotoClick}
        />
      )}
    </div>
  );
};

export default App;
