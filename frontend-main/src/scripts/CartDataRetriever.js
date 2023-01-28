import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom";

const getCartData = async () => {
    try{
        const url = "http://localhost:8000/getCartData";
        const data = {"token": sessionStorage.getItem("token")}
        const { data: res } = await axios.post(url, data)
        return res.data;
    }
    catch(error){
        return error.response.data.message;
    }

};

export default getCartData;