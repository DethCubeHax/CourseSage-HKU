import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";
import './Register.css';


const Register = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "", 
        password: "", 
        confirm: ""
    });
    const [error, setError] = useState("")
	
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
    const handleSubmit = async (e) => {
		e.preventDefault();
        
        const headers = {
              'content-type': 'application/x-www-form-urlencoded'
            }
		try {
			const url = "http://localhost:8000/reg";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
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


    const checkPassword = () => {
        if (data.password === data.confirm)
        {
            return false;
        }
        return true;
    }
    return(
        <>
            <div className="login_container">
                <div className="login_form_container">
                    <div className="left">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1 className="padding_bottom">Create a New Account</h1>
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
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirm"
                                onChange={handleChange}
                                value={data.confirm}
                                required
                                className="input"
                            />
                            {error && <div className="error_msg">{error}</div>}
                            <button type="submit" className="blue_btn">
                                Sign Up
                            </button>
                        </form>
                        <div>
                            <p className="padding_top">
                                <h1>Already a user? <Link to="/login" className="blue_text">Login</Link> instead.</h1>
                            </p>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register