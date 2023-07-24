import {useState, useEffect} from 'react';

const ColorXP = () => {
    const [favoriteColor, setFavColor] = useState('red')
    const [color, setColor] = useState('');

    useEffect(() => {
        alert('useEffect reached');
        setFavColor('yellow')
    }, []);

    useEffect(() => {
        if (color !== '')
        setFavColor(color)
    }, [color])

    const changeColor = () => {
        setFavColor(favoriteColor==='red'? 'blue' : 'red')
    }

    return (
        <>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <input onChange={(e) => setColor(e.target.value)}/>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default ColorXP;