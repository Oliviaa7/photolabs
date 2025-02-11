import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from '../mocks/photos';

import "../styles/PhotoList.scss";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((data) => {
        return (
          <li key={data.id}>
            <PhotoListItem photoData={data} />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
