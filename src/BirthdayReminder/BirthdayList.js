import React from 'react'
import Birthday from './Birthday';

function BirthdayList({birthdays,handleDeleteBirthdays}) {
    return (
        <div className='birthday-list'>
            <h1 className='birthday-list__title mb-1'> {`${birthdays.length}  birthdays today`} </h1>
            {birthdays.map( birthday => <Birthday key={birthday.id} {...birthday} /> )}
            <button onClick={handleDeleteBirthdays} className='btn btn-c'>Clear All </button>
        </div>
    )
}

export default BirthdayList
