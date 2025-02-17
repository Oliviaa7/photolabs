import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoData, isFavourite, toggleFavourite, onPhotoClick }) => {

  const handleFavourite = () => {
    toggleFavourite(photoData.id);
  };

  return (
    <article key={photoData.id} className="photo-list__item">
      <img src={photoData.urls.regular} alt="Post" className="photo-list__image" onClick={() => onPhotoClick(photoData)} />

      <PhotoFavButton onClick={handleFavourite} selected={isFavourite} />

      <div className="photo-list__user-details">
        <img src={photoData.user.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-name">{photoData.user.name}</p>
          <p className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</p>
        </div>
      </div>
    </article>
  );

};

export default PhotoListItem;
