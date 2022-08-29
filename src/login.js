import './login.css';
import React, { useState } from "react";
import axios from "axios";

function Login() {
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
        <div className="Login">
            <h1>로그인</h1>
            <input value={username} type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="ID" />
            <input value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="PASSWORD" />
            <button onClick={LoginApi}>로그인</button>
        </div>
    )
}

export default Login;