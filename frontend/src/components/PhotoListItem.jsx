import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { sampleData } = props;

  return (
    <article className="PhotoListItem">
      <div key={sampleData.id}>
        <img src={sampleData.imageSource} />
        <img src={sampleData.profile} />
        <h3>{sampleData.username}</h3>
        <h4>{sampleData.location.city}, {sampleData.location.country}</h4>
      </div>
    </article>
  )
};

export default PhotoListItem;
