import React, { useEffect, useReducer } from "react";

// Actions for reducer function
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  SET_FAVOURITES: 'SET_FAVOURITES',
  SET_MODAL_TYPE: 'SET_MODAL_TYPE'
};

// Initial states for state variables
const initialState = {
  favourites: [],
  selectedPhoto: null,
  modalType: false,
  photoData: [],
  topicData: [],
};

// Reducer function for useReducer
const reducer = function(state, action) {
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      console.log("Adding to favourites:", action.payload); // Check the payload
      return {
        ...state, // keep all previous state values 
        favourites: [...state.favourites, action.payload], // add new favourite photo
      };
    case 'FAV_PHOTO_REMOVED':
      return {
        ...state,
        favourites: [...state.favourites.filter(photo => photo.id !== action.payload.id)], // remove photo from favourites based on id
      };
    case 'SET_PHOTO_DATA':
      return {
        ...state,
        photoData: action.payload, // update photo data
      };
    case 'SET_TOPIC_DATA':
      return {
        ...state,
        topicData: action.payload, //update topic data
      };
    case 'SELECT_PHOTO':
      return {
        ...state,
        selectedPhoto: action.payload, // select a photo
      };
    case 'GET_PHOTOS_BY_TOPIC':
      return {
        ...state,
        photoData: action.payload, // update photo data based on topic
      };
    case 'SET_FAVOURITES':
      return {
        ...state,
        favourites: action.payload,
      };
    case 'SET_MODAL_TYPE':
      console.log('Setting modal type:', action.payload); 
      return {
        ...state,
        modalType: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect to fetch the photo data from the api
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((err) => {console.log('Error fetching photos: ', err)});
  }, []);


  // useEffect to fetch the topic data from the api
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((err) => {console.log('Error fetching topics: ', err)});
  }, []);


  // Favourite function to add photos to favourites state. 
  const updateToFavPhotoIds = (photo) => {
    if (state.favourites.some(favPhoto => favPhoto.id === photo.id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photo } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photo } });
    }
  };

  // Select photo function for onPhotoClick
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
    dispatch({ type: ACTIONS.SET_MODAL_TYPE, payload: 'photoDetails' });
  };

  // LoadTopic function for Top Nav Bar
  const onLoadTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data })
      })
      .catch((err) => {console.log('Error fetching photos for topic: ', err)});
  }

  // Select favourites for Favourites button
  const onFavClick = (favourites) => {
    console.log('Fav button clicked!');

    dispatch({ type: ACTIONS.SET_FAVOURITES, payload: favourites });
    dispatch({ type: ACTIONS.SET_MODAL_TYPE, payload: 'favourites' });
  }

  // CloseModal function for exit button on modal
  const onClosePhotoDetailModal = () => {
    dispatch({ type: ACTIONS.SET_MODAL_TYPE, payload: null });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onLoadTopic,
    onClosePhotoDetailModal,
    onFavClick
  };

};

export default useApplicationData;