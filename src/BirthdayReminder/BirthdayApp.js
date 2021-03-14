import React, {useState} from 'react';
import Birthday from './Birthday';
import BirthdayList from './BirthdayList';
import './styles.css';
import imageUrl from '../assets/image.png';

const BirthdayApp = () => {
    const [birthdays,setBirthdays] = useState(sampleData);
    const handleDeleteBirthdays = () => {
        setBirthdays([]);
    }
    return (
        <div className='birthday-app'>
           <BirthdayList handleDeleteBirthdays={handleDeleteBirthdays} birthdays={birthdays} />
        </div>
    );
}

export default BirthdayApp;

const sampleData = [
    {
        id:1,
        imageUrl: imageUrl,
        name: 'Adama Diaby',
        description: '26 ans'
    },
    {
        id:2,
        imageUrl: imageUrl,
        name: 'Aly Diaby',
        description: '25 ans'
    },
    {
        id:3,
        imageUrl: imageUrl,
        name: 'Adama Diaby',
        description: '26 ans'
    },
    {
        id:4,
        imageUrl: imageUrl,
        name: 'Aly Diaby',
        description: '25 ans'
    },
];