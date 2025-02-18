import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';

const App = () => {

  // Destructured declaration for useApplicationData hook
  const {
    state: { favourites, selectedPhoto, showModal, photoData, topicData },
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailModal,
  } = useApplicationData();


  return (

    <div className="App">
      <HomeRoute 
      photos={photoData}
      topics={topicData}
      favourites={favourites}
      showModal={showModal}
      selectedPhoto={selectedPhoto}
      onClosePhotoDetailModal={onClosePhotoDetailModal}
      toggleFavourite={updateToFavPhotoIds}
      onPhotoClick={onPhotoSelect}
      onTopicClick={onLoadTopic}
      />

    </div>
  );
};

export default App;
