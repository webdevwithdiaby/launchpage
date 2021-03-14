import React from 'react'
import image from '../assets/image.png';

function Birthday(props) {
    const {
        imageUrl,
        name,
        description
    } = props; 
    return (
        <div className='birthday'>
            <div className='birthday__shape'>
                <img className='birthday__image' src={imageUrl}  alt='Birthday photo'/>
            </div>
            <div className='birthday__text'>
                <h3 className='birthday__name mb-1'>{name} </h3>
                <p className='birthday__description'> {description} </p>
            </div>
        </div>
    )
}

export default Birthday
