import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <ul className="list-group">
            {
                users.map(user => (
                    <li key={user.id} className={'list-group-item'}>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                        <p>{user.email}</p>
                        <p>{user.birthday}</p>

                        <button onClick={() => deleteUser(user.id)} className="btn btn-danger m-1">Delete</button>
                        
                        <button onClick={() => selectUser(user)}
                        className="btn btn-warning m-1">Editar</button>


                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;