import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
// import Form from './components/Form';
// import ErrorTask from './components/ErrorTask';

const App = () => {

  return (
    <div>
      {/* <ErrorTask /> */}
      {/* <Form /> */}
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
