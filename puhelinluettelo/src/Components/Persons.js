import React from 'react'
import Person from './Person'

const Persons = (props) => {
    return (
      props.persons.map(person => 
        <Person key={person.id}
                id={person.id}
                name={person.name}
                number={person.number}
                handleDelete={props.handleDelete} />
      )
    )
  }

  export default Persons