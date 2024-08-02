import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarComponent, MainComponent, FavouritesComponent } from './components';

const App = () => {
    // Create state to manage the list of favorites
    const [favourites, setFavourites] = useState([]);

    // Render the application structure
    return (
        <Router>
            {/* Display the NavbarComponent at the top */}
            <NavbarComponent />
            {/* Define different routes for different components */}
            <Routes>
                {/* Render MainComponent when the path is '/' (home page) */}
                <Route path="/" element={<MainComponent favouritesProp={favourites} setFavouritesProp={setFavourites} />} />
                {/* Render FavouritesComponent when the path is '/favourites' */}
                <Route path="/favourites" element={<FavouritesComponent favouritesProp={favourites} setFavouritesProp={setFavourites} />} />
            </Routes>
        </Router>
    );
};

export default App;