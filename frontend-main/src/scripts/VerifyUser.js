import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";

const verifyUser = async () => {
    try{
        const url = "http://localhost:8000/verify";
        const { data: res } = await axios.post(url, {"token": sessionStorage.getItem("token")});
        console.log("Response message: " + res.message)
        console.log("Response status: " + res.status)
        return res.message;
    }
    catch(error){
        return error.response.data.message;
    }

};

export default verifyUser;