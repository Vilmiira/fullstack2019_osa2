import React from 'react'

const Person = (props) => {
  
  const handleDelete = () => {
    if(window.confirm(`Delete ${props.name}?`)) {
      props.handleDelete(props.id, props.name)
    }
  }
 
  return (
      <div>
        <p key={props.id}> 
          {props.name} {props.number} <button key={props.id} onClick={handleDelete}> delete </button>  
        </p> 
      </div>
    )
  }

  export default Person