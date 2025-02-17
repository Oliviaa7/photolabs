import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {

        // isFavourite variable for favourites state, to be used with favourite badge in main feed photo list 
        const isFavourite = favourites.some(fav => fav.id === photo.id);
        
        return (
          <li key={photo.id}>
            <PhotoListItem 
              photoData={photo}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
              onPhotoClick={onPhotoClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
