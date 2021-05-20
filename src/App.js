import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)

      })
      .catch(e => console.log(e))
  }, [])
  console.log(countries);
  return (
    <div className="App">
      <h1>Countries Loaded {countries.length}</h1>
        {
          countries.map((country, i) => <Country key={i} country={country}></Country>)
        }

    </div>
  );
}

export default App;
