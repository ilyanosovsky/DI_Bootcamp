import React, { useState } from 'react';
import './App.css';
import data from './superheroes.json';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [superheroesData, setSuperheroesData] = useState(data.superheroes);

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleClick = (hero) => {
    let choice = superheroesData.find((person) => person.id === hero.id);

    if (!choice.clicked) {
      const updatedArr = superheroesData.map((obj) =>
        obj.id === hero.id ? { ...obj, clicked: true } : obj
      );

      setScore((prevScore) => prevScore + 1);
      setSuperheroesData(updatedArr);
    } else {
      if (score > topScore) {
        setTopScore(score);
      }

      setScore(0);
      setSuperheroesData(data.superheroes);
    }
  };

  const shuffledHeroes = shuffle([...superheroesData]);

  return (
    <div className="App">
      <nav>
        <div className="top-header">
          <h1>Superheroes Memory Game</h1>
          <h2>Get points by clicking on an image but don't click on any more than once!</h2>
          <div>
            <p>
              Score: <span>{score}</span>
            </p>
            <p>
              Top Score: <span>{topScore}</span>
            </p>
          </div>
        </div>
      </nav>
      <div className="container">
        {shuffledHeroes.map((hero) => (
          <div key={hero.id} className="card" onClick={() => handleClick(hero)}>
            <img src={hero.image} alt={hero.name} />
            <p>
              <strong>Name:</strong> {hero.name}
            </p>
            <p>
              <strong>Occupation:</strong> {hero.occupation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;