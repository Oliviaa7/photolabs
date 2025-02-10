import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  const { listData } = props;

  return (
    <div className="topic-list__item">
      <h2>{listData.title}</h2>
    </div>
  );
};

export default TopicListItem;
