import React from 'react';
import SubjectList from '../components/SubjectList';

function HomePage({subjects}) {
    return (
        <div>
            <SubjectList subjects={subjects} />
        </div>
    )
}

export default HomePage
