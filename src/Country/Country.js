import React from 'react';
import './Country.css';

function Country(props) {
    const {
        name,
        description
    } = props;
    return (
        <div className="country">
            <h3 className="country__name"> {name} </h3>
            <p className="country__description"> {description} </p>
        </div>
    )
}

export default Country
