import React from 'react'
import Country from './Country';

function CountryList({countries}) {
    return (
        <div>
            {
                countries.map( country => {
                    return (
                        <Country key={country.id} {...country} />
                    );
                })
            }
        </div>
    )
}

export default CountryList
