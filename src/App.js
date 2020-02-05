import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const App = () => {
    const [weather, setWeather] = useState({});

    return (
        <div>
             <h1>Search for a city: </h1>
             <SearchBar setWeather={setWeather} />
             <WeatherCard weather={weather} />
        </div>
    );  
}

export default App;