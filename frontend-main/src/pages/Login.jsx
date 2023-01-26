import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [data, setData] = useState({ email: "", password: ""})
    const [error, setError] = useState("")
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8000/auth";
			const { data: res } = await axios.post(url, data);
			sessionStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return(
        <>
            <div className="login_container">
                <div className="login_form_container">
                    <div className="left">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1 class="padding_bottom">Login to Your Account</h1>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className="input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className="input"
                            />
                            {error && <div className="error_msg">{error}</div>}
                            <button type="submit" className="blue_btn">
                                Sign In
                            </button>
                        </form>
                        <div>
                            <p class="padding_top">
                                <h1>New Here? <Link to="/register" class="blue_text">Sign up</Link> instead.</h1>
                            </p>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login