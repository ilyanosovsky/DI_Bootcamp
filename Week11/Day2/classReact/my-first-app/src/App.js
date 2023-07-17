import './App.css';
// import Hello from "./Hello";
import users from "./users.json";
import User from "./components/User";


function App() {
  return (
    <div>
          {
            users.map((item,indx) => {
              return <User userinfo = {item} key={item.id} />;
            })
          }
    </div>
  );
}

export default App;