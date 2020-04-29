import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

const Login = (props) => {
    const [user, setUser] = useState({
        username: "Lambda School", 
        password: "i<3Lambd4"
    });

    const handleChange = e => {
        setUser({[e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", user)
            .then(response => {
                console.log("handleSubmit response", response);
                localStorage.setItem("token", response.data);
                props.history.push("/protected");
            })
            .catch(error => {
                console.error("error", error);
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>

        </div>
    )
};

export default Login;