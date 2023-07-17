import './App.css';
import UserFavoriteAnimals from "./components/XP/UserFavoriteAnimals";
import Exercise from "./components/XP/Exercise"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const string = <h1>React is {sum} times better with JSX</h1>;

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <> {myelement} </>
        <> {string} </>

        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>

        <div>
          <h1>{user.firstName}'s Favorite Animals</h1>
          <UserFavoriteAnimals favAnimals={user.favAnimals} />
        </div>

        <div>
            <Exercise />
        </div>

        <h1>Daily Challenge</h1>
        <div>
            <Carousel>
                    <div>
                        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt='Hong Kong' />
                        <p className="legend">Hong Kong</p>
                    </div>
                    <div>
                        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt='Macao' />
                        <p className="legend">Macao</p>
                    </div>
                    <div>
                        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt='Japan' />
                        <p className="legend">Japan</p>
                    </div>
                    <div>
                        <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt='New York' />
                        <p className="legend">New York</p>
                    </div>
            </Carousel>
        </div>
        
      </header>
    </div>
  );
}

export default App;


