import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const { setWeather } = props;

    const sendSearchEvent = async (e) => {
        e.preventDefault();
        let api = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=3acc16ffae9e45df92a064e41646355f`; 
        try { 
            let response = await axios.get(api)
            setWeather({...response.data.weather[0], ...response.data.main, name: response.data.name })
        } catch (err) { 
            setError('sorry your input is invalid, please try again with valid input');
            setTimeout(() => { setError('') }, 3000);
        }
    }

    const displayErrorMessage = () => {
        return error;
    }

    return (
        <form onSubmit={sendSearchEvent} >
            {error.length ? displayErrorMessage() : null}
            <input type="text" onChange={(e) => setInput(e.target.value)}/> 
        </form>
    );
};

export default SearchBar