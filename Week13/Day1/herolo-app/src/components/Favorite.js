import {useState, useEffect} from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Favorite = () => {
    const [favorites, setFavorites] = useState([
        {"215854": "tel aviv"}
    ])
    const [currents, setCurrents] = useState([])
    const displayCurrents = async () => {
        for (let i of favorites) {
            console.log("i", i)
            try { 
                const response = await fetch(`${BASE_URL}/currentconditions/v1/${Object.keys(i)[0]}?apikey=${API_KEY}&details=false`);
                const data = await response.json();
                const weatherText = data[0].WeatherText;
                const temp = data[0].Temperature.Metric.Value;
                const cityKey = Object.keys(i)[0];
                const cityName = Object.values(i)[0];
                const j = {
                    [cityName]: {
                        weatherText,
                        temp,
                        cityKey,
                        cityName
                    }
                }
                setCurrents(prevCurrents => [j, ...prevCurrents]); 
                console.log("jcur", currents)
            } catch(error) {
                console.log(error)
            }
        };
        setTimeout(() => {
            console.log("currents", currents)
        }, 2000);
        
    }

    useEffect(()=>{
        displayCurrents()
    }, [favorites])

    return(
        <div id="favorites">
            <h1>Favorite Places:</h1>
            {
                currents.map((i) => {
                    return (
                        <div style={{
                            display:'inline-block',
                            textAlign:'center',
                            padding: '20px',
                            margin: '20px',
                            border: '1px solid black'
                        }}>
                        <h3>{Object.keys(i)[0]}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorite;