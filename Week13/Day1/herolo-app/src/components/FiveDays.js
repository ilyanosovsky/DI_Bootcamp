import {useState, useEffect} from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const FiveDays = ({ cityKey }) => {

    const [fiveDays, setFiveDays] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        five()
    },[cityKey])
    
    const five = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`);
            const data = await res.json();
            setFiveDays(data.DailyForecasts);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    const getDayOfWeek = (dateString) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateString);
        return daysOfWeek[date.getDay()];
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <>
            {
                fiveDays.map((item,ind) => {
                    return(
                        <div key={ind} style={{
                            display:'inline-block',
                            textAlign:'center',
                            padding: '20px',
                            margin: '20px',
                            border: '1px solid black'
                        }}>
                            <h2>{getDayOfWeek(item.Date)}</h2> 
                            <p>Min Temperature: {item.Temperature?.Minimum?.Value} C</p>
                            <p>Max Temperature: {item.Temperature?.Maximum?.Value} C</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FiveDays;