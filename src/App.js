import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';


function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);


  console.log(users);
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data));
  },[]);


  const getUser = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data));
  }

  const addUsers = (userItem) => {
    axios.post('https://users-crud1.herokuapp.com/users/', userItem)
      .then(() => getUser())
      .catch((error) => console.log(error.response));
  };

  const deleteUser = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUser());
  }

  const selectUser = (user) => setUserSelected(user);
  const deselectUser = () => setUserSelected(null);

  const editUser = userEdited => {

    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userEdited)
    .then(() => getUser())
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App container">
      <div className="header d-flex justify-content-between" style={{ padding:'2rem'}}>
      <h1>Usuarios</h1>
      <button className='btn btn-primary btn-sm' onClick={()=> setShowModal(true)}>Crear Nuevo Usuario</button>

      </div>

      {showModal && 
      <UsersForm 
      addUsers={addUsers}
      userSelected={userSelected}
      deselectUser={deselectUser}
      editUser={editUser}
      close={() => setShowModal(false)}/>      
      }

      <UsersList
      users={users}
      selectUser={selectUser}
      deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
