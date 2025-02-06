import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photoData } = props;

  const photoDataHandler = photoData.map((data) => {

    return (
      <article key={data.id} className="photo-list__item">
        <img src={data.imageSource} alt="Post" className="photo-list__image" />
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
