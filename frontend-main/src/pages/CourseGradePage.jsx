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
    const path1 = "/courses/reviews/"+props.courseCode;
    let path = `${path1}`;
    navigate(path,
      {
        state: {
          props
        }
      });
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
            <p className='courseInfo' style={{fontSize:"20px", paddingBottom: "20px"}}>Number of each grade for {props.courseCode}-</p>

            <table>
              <tbody>
                <tr>
                  <td>A+: {gradeFull[0]}</td>
                  <td>B+: {gradeFull[3]}</td>
                  <td>C+: {gradeFull[6]}</td>
                </tr>
                <tr>
                  <td>A :  {gradeFull[1]}</td>
                  <td>B :  {gradeFull[4]}</td>
                  <td>C :  {gradeFull[7]}</td>
                </tr>
                <tr>
                  <td>A-: {gradeFull[2]}</td>
                  <td>B-: {gradeFull[5]}</td>
                  <td>C-: {gradeFull[8]}</td>
                </tr>
                <tr>
                  <td>D : {gradeFull[9]}</td>
                  <td>   Fail : {gradeFull[10]}</td>
                </tr>
              </tbody>
            </table>

          </div>
          <div className='btnContainer' style={{paddingTop: "40px", paddingLeft: "40px"}}>
            <button className='btnPrimary' onClick={routerChange}>
              Check Out Course Reviews
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