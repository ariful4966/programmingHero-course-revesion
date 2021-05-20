import './Country.css'

const Country = (props) => {
    const { name, population, region, flag, languages, area, capital, borders, currencies } = props.country;
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="country">
            <div className="country-info">
                <h1>Country Name: {name}</h1>
                <div className="single-country">
                    <div className="info-left">
                        <p className="capital">Capital: <strong>{capital}</strong></p>
                        <p>Population: {population}</p>
                        <p>Area: {area} <i>sqr km.</i></p>
                        <p>Language: <span>{languages[0].nativeName}</span></p>
                        <p>Currencies <br />
                            <span>Name: {currencies[0].name} </span><br />
                            <span>Symbol: {currencies[0].symbol}</span>
                        </p>
                    </div>
                    <div className="info-right">
                        <p>Region: {region}</p>
                        <p>Border Country: <br />
                            <ol>
                                {
                                    borders.map((desh, i) => <li key={i}>{desh}</li>)
                                }
                            </ol>
                        </p>
                    </div>
                </div>
                <button className="btn-country" onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
            <div className="country-flag">
                <img src={flag} alt="" />
            </div>

        </div>
    );
};

export default Country;