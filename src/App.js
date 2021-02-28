import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Country/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        const names = data.map(country => data.name)
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length} </h1>
      <h2>Country Added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country key={country.alpha3Code} country={country} handleAddCountry = {handleAddCountry}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
