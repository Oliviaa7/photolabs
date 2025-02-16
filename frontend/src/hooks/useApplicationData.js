import React, { useEffect, useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const initialState = {
  favourites: [],
  selectedPhoto: null,
  showModal: false,
  photos: [],
  topics: []
};

const reducer = function(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: [...state.favourites.filter(photo => photo.id !== action.payload.id)],
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        showModal: true,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
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

  const updateToFavPhotoIds = (photoId) => {
      if (state.favourites.some(photo => photo.id === photoId)) {
        dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId }});
      } else {
        dispatch( {type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId }});
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

    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails});
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const onClosePhotoDetailModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL })
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    // onLoadTopic,
    onClosePhotoDetailModal,
  };

};

export default useApplicationData;