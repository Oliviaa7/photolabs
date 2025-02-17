import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ listData, onTopicClick }) => {

  // Handle click to allow for topic filtering
  const handleClick = () => {
    onTopicClick(listData.id);
  }

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <h2>{listData.title}</h2>
    </div>
  );
};

export default TopicListItem;
