import React, { useState } from "react";
import axios from "axios";

function login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const LoginApi = () => {
        const data = {
            username: username,
            password: password
        }

        axios.post('http://127.0.0.1:8000/user/signin/', data)
            .then(res => {
                localStorage.setItem('token_access', res.data.access);
                localStorage.setItem('token_refresh', res.data.refresh);
                window.location.href = '/';
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
    }

    return (
        <div className="App">
            <header className="App-header">
                <input value={username} type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="ID" />
                <input value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="PASSWORD" />
                <button onClick={LoginApi}>확인</button>
            </header>
        </div>
    )
}

export default login;