import React from 'react'
import Part from './Part'

const Content = ({parts}) =>{
    return (
        <div>
            <Part nombre={parts.name} exercise={parts.exercises} />
        </div>
    )
}

export default Content
