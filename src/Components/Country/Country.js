import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {name, flag, region, population} = props.country
    const flagStyle = {
        width: "100px"
    }
    const countryStyle = {
        border: "1px solid red",
        borderRadius: "5px",
        margin: "10px",
        padding: "10px"
    }
    const handleAddCountry = props.handleAddCountry
    return (
        <div style={countryStyle}>
            <h2>This is {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Region : {region}</p>
            <p>Population : {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;