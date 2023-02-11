import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";

const removeCourse = async (props) => {
    console.log("SENDING: " + props)
    try{
        const url = "http://localhost:8000/removeCourse";
        const data = {"token": sessionStorage.getItem("token"),
            "title": props
        }
        axios.post(url, data);
    }
    catch(error){
        return error.response.data.message;
    }

};

export default removeCourse;