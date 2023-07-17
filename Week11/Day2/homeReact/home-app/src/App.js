import './App.css';
import UserFavoriteAnimals from "./components/XP/UserFavoriteAnimals";
import Exercise from "./components/XP/Exercise"


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
        
      </header>
    </div>
  );
}

export default App;


