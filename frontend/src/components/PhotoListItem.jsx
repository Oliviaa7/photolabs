import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photoData } = props;

  return (
    <article className="photo-list__item">
      <div key={photoData.id}>
        <img src={photoData.imageSource} alt="Post" className="photo-list__image"/>
        <img src={photoData.profile} alt="Profile" className="photo-list__user-profile"/>
        <h3>{photoData.username}</h3>
        <h4 className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</h4>
      </div>
    </article>
  )
};

export default PhotoListItem;
