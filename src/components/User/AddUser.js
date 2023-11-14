import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button  from '../UI/Button'

const AddUser = props => {
  const [enrteredUsername, setUsername] = useState('')
  const [enrteredAge, setAge] = useState('')

  const addUserHandler = (event) => {
    console.log(enrteredUsername, enrteredAge)
    props.setUserDetails({name: enrteredUsername, age: enrteredAge})
    event.preventDefault()
    setUsername('')
    setAge('')
  }
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={enrteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age:</label>
        <input id="age" type="number" value={enrteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser