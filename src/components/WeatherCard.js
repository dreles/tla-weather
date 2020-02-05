import React from 'react';
import objectIsEmpty from '../utils/objectIsEmpty';
import './style.css';

const WeatherCard = (props) => {
    const { weather } = props; 

    console.log(weather);

    if(objectIsEmpty(weather)){
        return null
    }

    return ( 
        <div className='weather-card'>
            <h2>{weather.name}</h2>
            <h2>{weather.main}</h2>
            <h2>{`${Math.round(weather.temp)}°C`} </h2>
        </div>
    );
}

export default WeatherCard;