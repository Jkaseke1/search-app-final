
# Search App Beta

## Description
The Search App Beta is a web application that allows users to search for various types of media using the iTunes Search API. Users can search for movies, podcasts, music, audiobooks, short films, TV shows, software, ebooks, and more. The application provides an attractive and user-friendly interface with the ability to add and remove items from a favourites list.

## Purpose
The main purpose of this application is to provide users with a seamless experience to search and explore different types of media content available on iTunes. It also demonstrates the integration of a React front-end with a Node.js and Express back-end, along with secure API communication using JWT.

## Key Features
- **User-Friendly Interface**: Built with React components for an interactive and responsive user experience.
- **Search Functionality**: Allows users to enter a search term and select the type of media they want to search for.
- **Favourites List**: Users can add and remove items from their favourites list.
- **Attractive Results Display**: All output results are displayed in an attractive and organized manner.
- **Secure API**: Uses JWT to authorize API requests and secure the API.

## Installation and Running the Application Locally

### Prerequisites
- Node.js (v22.4.1 or higher)
- npm (v10.8.1 or higher)

### Steps to Install and Run

1. **Clone the repository**:
    bash
    git clone https://github.com/Jkaseke1/search-app-beta.git
    cd search-app-beta
    

2. **Install backend dependencies**:
    bash
    npm install
    

3. **Install frontend dependencies**:
    bash
    cd frontend
    npm install
    cd ..
    

4. **Run the application**:
    bash
    npm run dev
    

5. **Access the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Deployment
The application is deployed on Render and can be accessed using the following URL:
[Search App Beta on Render](https://search-app-beta-final.onrender.com/)

## Backend
The backend of this application is built with Node.js and Express. It serves the React front-end and handles API requests to the iTunes Search API. Below are some of the key dependencies used:

- **Helmet.js**: Used to secure the web application by setting various HTTP headers.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Chai**: BDD/TDD assertion library for testing.
- **Mocha**: JavaScript test framework for Node.js and the browser.

### Backend Dependencies
- Node `npm i --save init`
- Express `npm i --save express`
- Nodemon `npm i --save nodemon`
- Helmet `npm i --save helmet`
- Axios `npm i --save axios`
- Chai `npm i --save-dev chai`
- Mocha `npm i --save-dev mocha`

## Frontend
The frontend of this application is built with React. Below are some of the key dependencies used:

- **Bootstrap**: CSS framework for responsive, mobile-first front-end web development.
- **Popper.js**: Library for managing poppers in web applications.
- **React Bootstrap**: Bootstrap components built with React.
- **Font Awesome**: Icon toolkit based on CSS.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Router Dom**: Standard library for routing in React applications.
- **React Test Renderer**: Experimental React renderer for rendering components to JavaScript objects.
- **Jest Watch Typeahead**: Jest plugin for filtering by filename or test name.

### Frontend Dependencies
- Bootstrap `npm i --save bootstrap`
- Popper.js `npm i @popperjs/core`
- React Bootstrap `npm i --save react-bootstrap`
- Font Awesome `npm i --save @fortawesome/fontawesome-free`
- Axios `npm i --save axios`
- React Router Dom `npm i --save react-router-dom`
- React Test Renderer `npm i --save react-test-renderer`
- Jest Watch Typeahead `npm i jest-watch-typeahead`

## iTunes Search API
Please consult the official documentation of the iTunes Search API: [iTunes Search API Overview](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html) to learn more about the iTunes Search API.

## License
This project is licensed under the MIT License.

