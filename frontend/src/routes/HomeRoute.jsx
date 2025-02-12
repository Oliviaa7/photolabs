import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;
