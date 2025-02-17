import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ( { topics, favourites, onTopicClick } ) => {

  // Variables for favourites heart within Nav Bar, allows fill and notification star
  const favouriteCount = favourites.length;
  const selected = favouriteCount > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge isFavPhotoExist={favouriteCount > 0} selected={selected}/>
    </div>
  )
}

export default TopNavigation;