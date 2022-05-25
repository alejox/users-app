import React, { useEffect, useState } from 'react';

const NewUser = ({close, addUsers, userSelected, editUser, deselectUser}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if(userSelected !== null){
            setName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setDate(userSelected.birthday);
        }else{
            reset();
        }
    },[userSelected])

    const submit = e =>{
        e.preventDefault();
        const user = {
            first_name: name,
            last_name: lastName,
            email,
            password,
            birthday: date
        }
        if(userSelected === null){
            addUsers(user);
        }else{
            editUser(user);
            deselectUser();
        }
    };

    const reset = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setDate("");
    };


    return (

        <div className="container row align-items-center vh-100 vw-100 justify-content-center">

        <div className="card" style={{ width:'20rem', border:'1px solid', borderRadius:'15px', padding:'15px'}}>
            
            <form onSubmit={submit}>
            <div className="d-flex p-2 justify-content-between">
                <h2>Nuevo Usuario</h2>
                <button onClick={close} type="button" className=" btn-close" aria-label="Close"></button>
            </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombres</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="John"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Apellidos</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Doe"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="JohnDoe@example.com"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Constraseña'
                        onChange={e => setPassword(e.target.value)}
                        value={password} 
                        />
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Cumpleaños</label>
                    <input
                        type="date"
                        className="form-control"
                        onChange={e => setDate(e.target.value)}
                        value={date}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
        </div>
    );
};

export default NewUser;