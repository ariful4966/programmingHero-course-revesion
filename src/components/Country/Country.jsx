import './Country.css'

const Country = (props) => {
    const { name, population, region, flag, languages, area, capital, borders, currencies} = props.country;
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="country">
            <div className="country-info">
                <h1>Country Name: {name}</h1>
                <p>Population: {population}</p>
                <p><small>Region: {region}</small></p>
                <p><strong>Language: {languages[0].nativeName}</strong></p>
                <p><strong>Capital: {capital}</strong></p>
                <p>Border Country: <br />
                    {
                        borders.map((desh, i)=><li key={i}>{desh}</li>)
                    }
                </p>
                <p><b>Currencies</b> <br />
                <span>Name: {currencies[0].name} </span><br />
                <span>Symbol: {currencies[0].symbol}</span>
                </p>
                <p>Area: {area} SQR KM.</p>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
            <div className="country-flag">
                <img src={flag} alt="" />
            </div>

        </div>
    );
};

export default Country;