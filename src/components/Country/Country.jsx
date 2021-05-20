import React from 'react';

const Country = (props) => {
    const country = props.country;
    return (
        <div>
            <h4>{country.name}</h4>
            <p>{country.population}</p>
        </div>
    );
};

export default Country;