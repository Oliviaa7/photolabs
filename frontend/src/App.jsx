import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from "mocks/topics";


import './App.scss';

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      imageUrl: photo.urls.regular,
      username: photo.user.name,
      userProfile: photo.user.profile,
      location: photo.location ? `${photo.location.city}, ${photo.location.country}` : "Location not available",
      similarPhotos: photo.similar_photos,
    }

    setSelectedPhoto(photoDetails);
    setShowModal(true);
  }



  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={handlePhotoClick}/>
      {showModal && (
        <PhotoDetailsModal photos={photos} photoDetails={selectedPhoto} closeModal={() => {setShowModal(false)}} favourites={favourites}/>
      )}
    </div>
  );
};

export default App;
