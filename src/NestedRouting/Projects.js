import React from 'react'

function Projects(props) {
    return (
        <div className='projects' >
            <h1 className="title"> {props.title} </h1>
            {
                props.projects.map( (p) => (<div key={p.id} className='project' > <h1 className="project__title">
                     {p.name} </h1> </div>) )
            }
        </div>
    )
}

export default Projects
