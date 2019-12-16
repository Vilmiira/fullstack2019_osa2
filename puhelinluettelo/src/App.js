import React, { useState, useEffect } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import personService from './Services/persons'
import Notification from './Components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
  }, [])

  const addName = (event) => {
    event.preventDefault()
      
    const personObject = {
        name: newName,
        number: newNumber
      }

    if (persons.map(person => person.name).includes(newName)) {
        window.alert(`${newName} is already added to phonebook`);
      } else {
        personService
          .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
            })
      
        setNotificationMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      }

      setNewName('')
      setNewNumber('')
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value) 
    
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id, name) => {
    personService.deletePerson(id)
    setNotificationMessage(
      `Deleted ${name}`
    )
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
    const newPersons = persons.filter(person => person.id !== id)
    setPersons(newPersons)
    
  }
  
  return (
    <div>
      <Notification message={notificationMessage} />
      <h2>Phonebook</h2>
        <PersonForm name={newName}
                    number={newNumber}
                    handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}
                    addName={addName}/>
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons}
                 handleDelete={handleDelete} />
      </div>
    </div>
  )

}

export default App
