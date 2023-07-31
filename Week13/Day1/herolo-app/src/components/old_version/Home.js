import {useState, useEffect} from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
    const [cityKey, setCityKey] = useState(215854);
    const [cityName, setCityName] = useState("Tel Aviv")
    const [weatherText, setWeatherText] = useState(null);
    const [temp, setTemp] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [favorites, setFavorites] = useState([]);


    const cityComplete = async (e) => {
        if (e.target.value.length > 2) {
            try {
                const response = await fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${e.target.value}`);
                const data = await response.json();
                setCityKey(data[0].Key);
                setCityName(data[0].LocalizedName)
                console.log("city: ", data[0].LocalizedName)
            } catch(error) {
                console.log(error)
            }  
        }
    }
    
    const displayCurrent = async () => {
        try {
            const response = await fetch(`${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}&details=false`);
            const data = await response.json();
            setWeatherText(data[0].WeatherText);
            setTemp(data[0].Temperature.Metric.Value);
            
        } catch (error) {
            console.log(error)
        }
    }

    const displayForecast = async () => {
        const localForecast = [];
        try {
            const response = await fetch (`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`);
            const data = await response.json();
            for (let i of data.DailyForecasts) {
                let day = {
                    "date": i.Date,
                    "daytime": {
                        "temperature": i.Temperature.Maximum.Value,
                        "iconPhrase": i.Day.IconPhrase
                    },
                    "night": {
                        "temperature": i.Temperature.Minimum.Value,
                        "iconPhrase": i.Night.IconPhrase
                    }
                };
                localForecast.push(day)
            };
            setForecast(localForecast)
            console.log(forecast);

        } catch(error) {
            console.log(error)
        }
    }

    const addToFavorites = () => {
        setFavorites([cityName, ...favorites]);
        console.log(favorites)
    };

    const removeFromFavorites = () => {
        setFavorites((current) =>
          current.filter((city) => city !== cityName)
        );
        console.log("favorites", favorites)
    };

    const getDayOfWeek = (dateString) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        return daysOfWeek[date.getDay()];
    };

    useEffect(()=>{
        displayCurrent();
        displayForecast();
    }, [cityKey])


    return(
        <>
            <form>
                <label htmlFor="cityInput">Enter City:</label>
                <input onChange={cityComplete} type="text" id="cityInput" placeholder="Enter City..."></input>
            </form>
            <div id="currentWeather">
                {favorites.includes(cityName) ? 
                    <button onClick={removeFromFavorites}>Remove {cityName} from Favorites</button> :
                    <button onClick={addToFavorites}>Add {cityName} to Favorites</button>}
                <h3>Current Weather for {cityName}:</h3>
                <p>Conditions: {weatherText}</p>
                <p>Temperature: {temp}</p>
            </div>
            <div id="forecast">
                <h3>5-Day Forecast:</h3>
                {
                    forecast.map((i) => {
                        return(
                            <div class="day" style={{
                            display:'inline-block',
                            textAlign:'center',
                            padding: '20px',
                            margin: '20px',
                            border: '1px solid black'
                        }}>
                                {/* <strong>Date: {i.date.slice(0,10)}</strong> */}
                                <strong>{getDayOfWeek(i.date)}</strong>
                                <p>Day: {i.daytime.iconPhrase}, {i.daytime.temperature}C</p>
                                <p>Night: {i.night.iconPhrase}, {i.night.temperature}C</p>
                                <hr/>
                            </div>
                        )
                        
                    })
                }
            </div>
        </>
    )
}

export default Home;