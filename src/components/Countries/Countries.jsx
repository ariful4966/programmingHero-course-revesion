import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    // console.log(countries);
    return (
        <div>
            {
                countries.map((country, idx) => <Country country={country} key={idx}></Country>)
            }
        </div>
    );
};

export default Countries;