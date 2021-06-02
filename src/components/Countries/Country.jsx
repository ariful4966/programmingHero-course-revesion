import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, region } = props.country;
    // console.log(props);
    const style = {

        border: '1px solid darkgray',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '5px'
    }
    const match = useRouteMatch()
    const history = useHistory();
    const handleShowDetails = (name) => {
        history.push(`${match.url}/${name}`)
    }
    // console.log(match);
    return (
        <div style={style}>
            <h2>Country Name: {name} </h2>
            <p> <strong>Capital: {capital}</strong></p>
            <p>Region: {region}</p>
            <button onClick={() => handleShowDetails(name)}>Show Details</button>
            <Link to={`/country/${name}`}>Show Details</Link>

        </div>
    );
};

export default Country;