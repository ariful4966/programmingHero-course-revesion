
import { Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './Country.css'

const CountryDetails = () => {
    const { cname } = useParams();
    const [country, setCountry] = useState({})
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${cname}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCountry(...data);
            })
    }, [])
    console.log(country);
    const { name, capital, area, timezones,currencies, latlng, population, flag, languages, nativeName, subregion, region, numericCode, borders, regionalBlocs, callingCodes } = country;
    return(
        <Grid container spacing={3} display="flex" alignItems="center">
            <Grid item xs={12} sm={6} >
                <div className="name-area">
                    <h1>{name}</h1>
                    <h4>Capital: {capital}</h4>
                    <p><b>Total Area:</b> {area} <em>sqr km.</em></p>
                    <p> <strong>Latitude And Longitude</strong>
                        <ul>
                            {
                                latlng && latlng.map((ll, idx) => <li key={idx}>{ll}</li>)
                            }
                        </ul>
                    </p>
                    <p>
                        <b>Language:</b>
                        <ul>
                            {
                                languages && languages.map((ln, idx) => <li key={idx}>{ln.name}- {ln.nativeName}</li>)
                            }
                        </ul>
                    </p>
                    <p><b>Total Peoples:</b> {population}</p>
                    <p><b>Border Country:</b>
                            <ul>
                                {
                                    borders && borders.map((br, idx)=><li key={idx}>{br}</li>)
                                }
                            </ul>

                    </p>
                    <p><b>Attach Organization</b>
                        <ul>
                            {regionalBlocs&&  regionalBlocs.map((or, idx)=><li key={idx}>{or.name}</li>)}
                        </ul>
                    </p>
                    <p><b>Numeric Code:</b> {numericCode}
                    </p>
                    <p><b>Country Phone Calling Codes:</b> {callingCodes}</p>
                    {
                        currencies && <p><b>Currency Name:</b> {currencies[0].name}- Symbol: {currencies[0].symbol}</p>
                    }
                    <p><b>Own Country Name:</b> {nativeName}</p>
                    <p><b>{region}</b> of {subregion}</p>
                    <p><b>Time Zones</b> {timezones}</p>
                
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className="flag-area">
                    <img src={flag} alt="" />
                </div>
            </Grid>
        </Grid>
    );
};

export default CountryDetails;