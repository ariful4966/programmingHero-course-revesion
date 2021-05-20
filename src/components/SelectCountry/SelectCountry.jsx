

const SelectCountry = (props) => {
    const selectCountry = props.selectCountry
    console.log(selectCountry);
    // let totalPopulation = 0;
    // for (let i = 0; i < selectCountry.length; i++) {
    //     const country = selectCountry[i];
    //     totalPopulation +=  country.population

    // }
    const totalPopulation = selectCountry.reduce((total, country) => total + country.population, 0);
    return (
        <div>
            <h4>Selected Country: {props.selectCountry.length}</h4>
            <p>Total Population : {totalPopulation}</p>
        </div>
    );
};

export default SelectCountry;