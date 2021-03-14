import React from 'react';
import Country from './Country';
import CountryList from './CountryList';

const CountryApp = () => {
    return (
        <div>
           <CountryList countries= {countries} />
        </div>
    );
}

const countries = [
    {
        id:1,
        name: 'Mali',
        description: 'Mali description is here read more....'
    },
    {
        id:2,
        name: 'France',
        description: 'France description is here read more....'
    },
    {
        id:3,
        name: 'Italie',
        description: 'Italie description is here read more....'
    },
];

export default CountryApp;