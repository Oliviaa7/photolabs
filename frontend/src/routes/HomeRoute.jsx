import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, onPhotoClick, onTopicClick }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} onTopicClick={onTopicClick} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={onPhotoClick} />
    </div>
  );
};

export default HomeRoute;
