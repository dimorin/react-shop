import { useState, lazy, Suspense } from 'react';
import shoes_data from './data';
/* import Home from './components/home';
import Detail from './components/detail';
import Cart from './components/cart'; */
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.scss';

const Home = lazy(() => import('./components/home'));
const Detail = lazy(() => import('./components/detail'));
const Cart = lazy(() => import('./components/cart'));

function App() {
  let [stock, setStock] = useState([10,11,12]);
  let [shoes, setShoes] = useState(shoes_data);
  const handleGetShoes = async() => {
    /* axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result) => {
      let new_shoes = [...shoes, ...result.data];
      setShoes(new_shoes);
    })
    .catch(() => {
    }); */
    let result = await axios.get('https://codingapple1.github.io/shop/data2.json');   
    let new_shoes = [...shoes, ...result.data];
    setShoes(new_shoes);
    
  }
  
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home shoes={shoes} getShoes={handleGetShoes} />} />
          <Route path="/detail/:id" element={<Detail shoes={shoes} stock={stock} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;
