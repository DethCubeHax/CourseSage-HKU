import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import "./CourseGradePage.css";
import nft from "./nft.jpg";
import { CourseBarGraph } from '../components/CourseBarGraph';
import {MdCancel} from 'react-icons/md';



const CourseGradePage = ({ open, onClose, props }) => {
  const gradeFull = Array.from(props.gradeListDetailed);

  let navigate = useNavigate();
  const routerChange = () => {
    const path1 = "/";
    let path = `${path1}`;
    navigate(path);
  }

  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
        <p style={{fontSize: "30px", paddingBottom: "20px"}}>
          Grade Summary by numbers:
        </p>
          <CourseBarGraph props={props}/>
        </div>
        
        {/* <img src={nft} alt='/' /> */}
        {/* <h1 >Grades Summary-</h1> */}
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            <MdCancel />
          </p>
          <div className='content'>
            {/* <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade? {props.courseCode}</p> */}
            <p className='courseInfo' style={{fontSize:"20px", paddingBottom: "20px"}}>Number of each grade for {props.courseCode}-</p>
            <div style={{paddingLeft:"100px"}}>
              <div style={{display: "flex"}}>
                <p style={{paddingRight: "50px"}}>A+ : {gradeFull[0]}</p>
                <p style={{paddingRight: "50px"}}>B+ : {gradeFull[3]}</p>
                <p style={{paddingRight: "50px"}}>C+ : {gradeFull[6]}</p>
              </div>

              <div style={{display: "flex"}}>
                <p style={{paddingRight: "60px"}}>A  : {gradeFull[1]}</p>
                <p style={{paddingRight: "65px"}}>B  : {gradeFull[4]}</p>
                <p style={{paddingRight: "60px"}}>C  : {gradeFull[7]}</p>
              </div>

              <div style={{display: "flex"}}>
                <p style={{paddingRight: "57px"}}>A- : {gradeFull[2]}</p>
                <p style={{paddingRight: "56px"}}>B- : {gradeFull[5]}</p>
                <p style={{paddingRight: "50px"}}>C- : {gradeFull[8]}</p>
              </div>

              <div style={{display: "flex"}}>
                <p style={{paddingRight: "73px"}}>D : {gradeFull[9]}</p>
                <p>Fail: {gradeFull[10]}</p>
              </div>
            </div>

          </div>
          <div className='btnContainer' style={{paddingTop: "40px", paddingLeft: "40px"}}>
            <button className='btnPrimary' onClick={onClose}>
              Exit
            </button>
            {/* <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Modal;

export default CourseGradePage;