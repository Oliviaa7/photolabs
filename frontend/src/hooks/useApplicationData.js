import React, { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
};

const initialState = {
  favourites: [],
  selectedPhoto: null,
  showModal: false,
  photoData: [],
  topicData: [],
};

const reducer = function(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case 'FAV_PHOTO_REMOVED':
      return {
        ...state,
        favourites: [...state.favourites.filter(photo => photo.id !== action.payload.id)],
      };
    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photoData: action.payload,
      };
    case 'SET_TOPIC_DATA':
      return {
        ...state,
        topicData: action.payload,
      };
    case 'SELECT_PHOTO':
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case 'DISPLAY_PHOTO_DETAILS':
      return {
        ...state,
        showModal: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };
    case 'GET_PHOTOS_BY_TOPIC':
      return {
        ...state,
        photoData: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('State changed: ', state);
  }, [state]);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((err) => {console.log('Error fetching photos: ', err)});

  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((err) => {console.log('Error fetching topics: ', err)});
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.some(photo => photo.id === photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const onPhotoSelect = (photo) => {
    const photoDetails = {
      photoId: photo.id,
      imageUrl: photo.urls.regular,
      username: photo.user.name,
      userProfile: photo.user.profile,
      location: photo.location ? `${photo.location.city}, ${photo.location.country}` : "Location not available",
      similarPhotos: photo.similar_photos,
    };

    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const onLoadTopic = (topicId) => {
    
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data })
      })
      .catch((err) => {console.log('Error fetching photos for topic: ', err)});
  }

  const onClosePhotoDetailModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onLoadTopic,
    onClosePhotoDetailModal,
  };

};

export default useApplicationData;