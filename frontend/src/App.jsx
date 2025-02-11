import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from "mocks/topics";


import './App.scss';

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter((id) => id !== photoId)
      } else {
        return [...prevFavourites, photoId]
      }
    })
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} favourites={favourites} toggleFavourite={toggleFavourite}/>
    </div>
  );
};

export default App;
