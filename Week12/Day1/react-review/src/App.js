import CarXp from "./components/CarXP.js";
import EventsXP from "./components/EventsXP.js";
import PhoneXP from "./components/PhoneXP.js";

function App() {

  //XP part 1
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    
    <div className="App">
        {/* Exercise XP part 1 */}
          <CarXp name={carinfo.name} model={carinfo.model}/>
        {/* Exercise Xp part 2 */}
          <EventsXP />
        {/* Exercise XP part 3 */}
          <PhoneXP />
    </div>
  );
}

export default App;
