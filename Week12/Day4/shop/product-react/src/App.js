import './App.css';
import Product from './components/Product';
import Products from './components/Products';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path='/:id' element={<Product />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
