import './Country.css'

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="country">
            <div className="country-info">
                <h1>Country Name: {name}</h1>
                <p>Population: {population}</p>
                <p><small>{region}</small></p>
                <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
            <div className="country-flag">
                <img src={flag} alt="" />
            </div>

        </div>
    );
};

export default Country;