import React from 'react';
import styled from 'styled-components';
import { Text } from '@chakra-ui/react';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Header() {
  const [input,setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input.toUpperCase());
    
  };


  const detectText = (e) => {
    setInput(e.target.value);
  }

  return (
    <div style={{height: "80px", widht: "100%", paddingTop: "20px", paddingLeft: "38px", paddingRight: "35px", backgroundBlendMode: "hard-light"}}>
        <FormStyle onSubmit={submitHandler}>
            <div style={{display: "flex", width: "30rem", margin: "auto"}}>
                <FaSearch />
                <input onChange={detectText} type="text" placeholder='Enter the course code' value={input} id="searchHead" />
            </div>
        </FormStyle>
    </div>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    

    div {
        width: 100%;
        position: relative;
        display: grid;
        justify-content: center;
    }
    

    input {
        border: none;
        background: linear-gradient(35deg, #89CBF3, #89CBF3);
        font-size: 1rem;
        color: white;
        padding: 0.5rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 30rem;
       
    }
    #searchHead::placeholder {
        color: white;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;



export default Header