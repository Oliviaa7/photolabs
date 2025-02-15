import React, { useState, useEffect } from "react";

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('State changed: ', { favourites, selectedPhoto, showModal });
  }, [favourites, selectedPhoto, showModal]);

  const updateToFavPhotoIds = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter((id) => id !== photoId)
      } else {
        return [...prevFavourites, photoId]
      }
    })
  }

  const onPhotoSelect = (photo) => {
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

  const onClosePhotoDetailModal = () => {
    setShowModal(false);
  }

  return {
    state: { favourites, selectedPhoto, showModal },
    updateToFavPhotoIds,
    onPhotoSelect,
    // onLoadTopic,
    onClosePhotoDetailModal,
  }

};

export default useApplicationData;