import React from 'react' 
import Card from '../UI/Card'
import classes from './UserList.module.css'

const UsertList = (props) => {
  if (props && props.userList.length <= 0) {
    return
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map(user => (
          <li key={user.age}>
            {user.name}({user.age} years old)
            {/* {user} years old) */}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsertList