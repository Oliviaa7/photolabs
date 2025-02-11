import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoListItem 
              photoData={photo}
              isFavourite={favourites.includes(photo.id)}
              toggleFavourite={toggleFavourite} />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
