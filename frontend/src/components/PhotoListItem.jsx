import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photoData } = props;

  const [selectedPhotos, setSelectedPhotos] = useState({});

  const handleClick = (id) => {
    setSelectedPhotos((prevSelectedPhotos) => ({
      ...prevSelectedPhotos,
      [id]: !prevSelectedPhotos[id],
    }));
  };

  return (
    <article key={photoData.id} className="photo-list__item">
      <img src={photoData.urls.regular} alt="Post" className="photo-list__image" />

      <PhotoFavButton onClick={() => handleClick(photoData.id)} selected={selectedPhotos[photoData.id]} />

      <div className="photo-list__user-details">
        <img src={photoData.user.profile} alt="Profile" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h3>{photoData.user.username}</h3>
          <h4 className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</h4>
        </div>
      </div>
    </article>
  );

};

export default PhotoListItem;
