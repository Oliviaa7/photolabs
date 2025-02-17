# PhotoLabs React Project
PhotoLabs is a photo management application. The application allows users to explore and interact with a collection of photos. Users can view a photo grid, enlarge a photo and view a selection of similar photos, add photos to their favorites, and filter photos by topics.

## Final Product

### PhotoLabs Home Page
!["Screenshot of PhotoLabs home page"](https://github.com/Oliviaa7/photolabs/blob/04d5210e0b56f33429039394b8f9533d1af5c9a7/docs/home-page.png)
This is the main page of the PhotoLabs app where users can view a grid of photos.

### Topics Filter
!["Screenshot of the main page with a topic filter applied"](https://github.com/Oliviaa7/photolabs/blob/04d5210e0b56f33429039394b8f9533d1af5c9a7/docs/topic-filter.png)
This shows the main page with a filter applied to show specific photos related to the selected topic.

### Photo Modal
!["Screenshot of the photo modal which shows the selected photo in a larger view and with similar photos in a grid below](https://github.com/Oliviaa7/photolabs/blob/04d5210e0b56f33429039394b8f9533d1af5c9a7/docs/photo-modal.png)
When a photo has been selected, the photo modal pops up to show an enlarged view of that photo, along with a grid of similar photos for further exploration.

### Similar Photos
!["Screenshot of similar photos to the selected photo"](https://github.com/Oliviaa7/photolabs/blob/04d5210e0b56f33429039394b8f9533d1af5c9a7/docs/similar-photos-grid.png)
This shows a grid of similar photos to the selected photo.

## Setup

To get the PhotoLabs application running locally, follow these steps:

1. Clone the repository onto your local device: `git clone git@github.com:Oliviaa7/photolabs.git`

### [Frontend] Running Webpack Development Server

Navigate to the Front End: `cd frontend`
Install dependencies: `npm install`
Run the development server: `npm start`

### [Backend] Running Backend Server

Navigate to the Back End: `cd backend`
Install dependencies: `npm install`
Read `backend/readme` for further setup details.
Run the API server: `npm start`

## Dependencies

### Front End
 - React
 - Webpack
 - SASS/SCSS

### Back End
 - Express
 - CORS
 - Node-fetch

