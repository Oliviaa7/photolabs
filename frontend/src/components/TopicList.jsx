import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
            <TopicListItem key={topic.id} listData={topic} onTopicClick={onTopicClick} />
        )
      })}
    </div>
  );
};

export default TopicList;
