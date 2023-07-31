import {useState} from 'react';
import FiveDays from './FiveDays';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const SearchCity = () => {
    const [searchText, setSearchText] = useState('');
    const [searchCity, setSearchCity] = useState(null);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = async (event) => {
    event.preventDefault();
    try {
        const res = await fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchText}`);
        const data = await res.json();
        setSearchCity(data[0]);
    } catch (e) {
        console.log(e);
    }
    };


    return(
        <>
            <form onSubmit={handleSearch}>
                <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                placeholder="Enter city name"
                />
                <button type="submit">Search</button>
            </form>
            {searchCity && (
                <>
                <div>
                    <h2>City: {searchCity.LocalizedName}</h2>
                    <h4>City Key: {searchCity.Key}</h4>
                </div>
                <FiveDays cityKey={searchCity.Key} />
                </>
            )}
        </>
    )
}

export default SearchCity;