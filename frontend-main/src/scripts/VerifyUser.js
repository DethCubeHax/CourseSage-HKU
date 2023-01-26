import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";

const verifyUser = async (data) => {
    try {
        const url = "http://localhost:8000/verify";
        const { data: res } = await axios.post(url, data);
        console.log(res.message);
        return true;
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            return false;
        }
    }
};

export default verifyUser;