import React from 'react'

const Course = ({course}) => {
    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Header = ({course}) => {
    return (
        <div>
            <h2>
               {course.name} 
            </h2>
        </div>
    )
}

const Content = ({course}) => {
    const createParts = () => course.parts.map(part => 
            <Part key={part.id} part={part}/>
        )
    

    return (
        <div>
            {createParts()}  
        </div>
    )
}


const Total = ({parts}) => {

    const amountsOfExercises = parts.map(part => part.exercises)
    const total = amountsOfExercises.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )

    return (
        <p>
            <strong> 
                Number of exercises {total} 
            </strong>
        </p>  
    )
}

const Part = ({part}) => {
    return (
        <p> 
                {part.name} {part.exercises}
        </p>
    )
}

export default Course