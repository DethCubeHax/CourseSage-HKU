import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";

const addCourse = async (props) => {
    try{
        const url = "http://localhost:8000/addCourse";
        const data = {"token": sessionStorage.getItem("token"),
            "title": props.courseCode
        }
        const { data: res } = await axios.post(url, data);
        return res.message;
    }
    catch(error){
        return error.response.data.message;
    }

};

export default addCourse;