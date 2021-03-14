import React from 'react'

function Projects({projects}) {
    return (
        <div className='projects' >
            <h4 className="title"> Projects </h4>
           { projects.map(p => (<p className='project' key={p.id} > {p.name} </p>))}
        </div>
    )
}

export default Projects
