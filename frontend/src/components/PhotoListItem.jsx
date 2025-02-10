import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { photoData } = props;

  const [selectedPhotos, setSelectedPhotos] = useState(
    photoData.reduce((acc, photo) => {
      acc[photo.id] = false;
      return acc;
    }, {})
  );

  const handleClick = (id) => {
    setSelectedPhotos((prevSelectedPhotos) => ({
      ...prevSelectedPhotos,
      [id]: !prevSelectedPhotos[id],
    }));
  };

  const photoDataHandler = photoData.map((data) => {

    return (
      <article key={data.id} className="photo-list__item">
        <img src={data.imageSource} alt="Post" className="photo-list__image" />

        <PhotoFavButton onClick={() => handleClick(data.id)} selected={selectedPhotos[data.id]}/>

        <div className="photo-list__user-details">
          <img src={data.profile} alt="Profile" className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <h3>{data.username}</h3>
            <h4 className="photo-list__user-location">{data.location.city}, {data.location.country}</h4>
          </div>
        </div>
      </article>
    );
  });

  return (
    <section className="photo-list">
      {photoDataHandler}
    </section>
  );
};

export default PhotoListItem;
