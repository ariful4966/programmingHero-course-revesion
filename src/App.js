
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
  const handleAddCountry = (country) => {
    console.log('added', country);
  }
  return (
    <div className="App">
      <h1>Countries Loaded {countries.length}</h1>
      <h4>Country Added: </h4>
      {
        countries.map((country, i) => <Country
          key={i}
          country={country}
          handleAddCountry={handleAddCountry}
        ></Country>)
      }

    </div>
  );
}

export default App;
