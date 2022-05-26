import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className="container">

        <ul className="list-group row">
            {
                users.map(user => (
                    <li key={user.id} className={'list-group-item'}>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                        <p>{user.email}</p>
                        <p>{user.birthday}</p>

                        <button onClick={() => deleteUser(user.id)} className="btn btn-danger m-1"><i class="fa-solid fa-trash-can"></i></button>

                        <button onClick={() => selectUser(user)}
                        className="btn btn-warning m-1"><i class="fa-solid fa-pen-to-square"></i></button>

                    </li>
                ))
            }
        </ul>

        </div>
    );
};

export default UsersList;