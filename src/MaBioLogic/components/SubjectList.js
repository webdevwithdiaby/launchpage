import React from 'react'
import Subject from './Subject'

function SubjectList({subjects}) {
    return (
        <div>
            {
                subjects.map(s => (<Subject key={s.id} {...s} />))
            }
        </div>
    )
}

export default SubjectList
