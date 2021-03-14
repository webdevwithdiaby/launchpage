import React from 'react'
import AboutMe from './AboutMe';
import AboutTeam from './AboutTeam';

function About(props) {
    const searchType = props.location.search;
    return (
        <div className='about' >
            <h1 className="title">
                About
                {searchType.includes('?type=me') && <AboutMe/>}
                {searchType.includes('?type=team') && <AboutTeam/>}
            </h1>
        </div>
    )
}

export default About
