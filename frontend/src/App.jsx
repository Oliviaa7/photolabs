import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';

const App = () => {

  // Destructured declaration for useApplicationData hook
  const {
    state: { favourites, selectedPhoto, modalType, photoData, topicData },
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailModal,
    onFavClick
  } = useApplicationData();


  return (

    <div className="App">
      <HomeRoute 
      photos={photoData}
      topics={topicData}
      favourites={favourites}
      modalType={modalType}
      selectedPhoto={selectedPhoto}
      toggleFavourite={updateToFavPhotoIds}
      onClosePhotoDetailModal={onClosePhotoDetailModal}
      onPhotoClick={onPhotoSelect}
      onTopicClick={onLoadTopic}
      onFavClick={onFavClick}
      />

    </div>
  );
};

export default App;
