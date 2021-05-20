
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import SelectCountry from './components/SelectCountry/SelectCountry';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectCountry, setSelectCountry] = useState([]);
  

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)

      })
      .catch(e => console.log(e))
  }, [])
  const handleAddCountry = (country) => {
    const newSelectCountry = [...selectCountry, country];
    setSelectCountry(newSelectCountry)
  }
  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'space-around'}}>
      <h1>Countries Loaded {countries.length}</h1>
      <SelectCountry selectCountry={selectCountry}></SelectCountry>
      </div>
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
