import { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsertList from './components/User/UserList';
// import DualPointer from './components/User/DualPointer'

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
      {/* <div><DualPointer /></div> */}
      <AddUser setUserDetails={getUserDetails}/>
      <UsertList userList={userList}/>
    </div>
  );
}

export default App;
