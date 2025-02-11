import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <PhotoListItem photoData={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
