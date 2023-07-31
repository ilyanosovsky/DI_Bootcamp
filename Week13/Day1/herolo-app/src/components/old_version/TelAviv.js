import {useState, useEffect} from 'react';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const TelAviv = (props) => {

    const [telAvivW, setTelAvivW] = useState([]);

    useEffect(() => {
        onlyTel()
    },[])

    const onlyTel = async () => {
        try {
            const res = await fetch(`${BASE_URL}/currentconditions/v1/215793?apikey=${API_KEY}`);
            const data = await res.json();
            setTelAvivW(data);
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <>
            {
                telAvivW.map((item,ind) => {
                    return(
                        <div key={ind} style={{
                            display:'inline-block',
                            textAlign:'center',
                            padding: '20px',
                            margin: '20px',
                            border: '1px solid black'
                        }}>
                            <h2>Tel Aviv Today</h2>
                            <h3>{item.WeatherText}</h3>
                            <h3>{item.Temperature.Metric.Value} C</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TelAviv;