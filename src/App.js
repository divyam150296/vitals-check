import { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsertList from './components/User/UserList';

function App() {
  
  const [userList, setUserList] = useState([])
  // if (userList.length <= 0) {
  //   return
  // }
  const getUserDetails = (value) => {
    setUserList((prevValue) => (
      [...prevValue, value]
    ))
  }
  return (
    <div>
      <AddUser setUserDetails={getUserDetails}/>
      <UsertList userList={userList}/>
    </div>
  );
}

export default App;
