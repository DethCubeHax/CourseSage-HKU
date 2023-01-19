import React, { useState } from 'react';
import { Chart } from './Chart';
import "./Card.css"
import Modal from '../pages/Modal';
import CourseReviewPage from '../pages/CourseReviewPage';
import CourseGradePage from '../pages/CourseGradePage';


function Card(props) {
    // const instructors = props.instructors;
    // console.log("instructors are: ")
    // console.log(props)
    // console.log(instructors)

    const [openModal, setOpenModal] = useState(false);
  
    return (
    
    <div className="optimus" onClick={() => setOpenModal(true)}>


        <CourseGradePage 
        open={openModal} 
        onClose={() => setOpenModal(false)}
        props={props} />


        <div className="master">
            <div className="leftcol">
                <h1 style={{fontSize: "22px", fontWeight: "bold"}}>
                    {props.courseCode}: {props.courseName}
                </h1>
                <div style={{paddingLeft: "30px",fontSize: "14px", paddingTop: "10px"}}>
                    {props.instructors.map((instructor) => {
                        return (
                            <p>{instructor}</p>
                        )
                    })}
                    {/* {props.instructors} */}
                </div>
                <div style={{paddingLeft: "30px", paddingTop: "8px", fontSize: "12px", width: "400px"}}>
                    <div style={{fontSize: "15px", fontWeight: "bold"}}>Best Review:</div> 
                    <p>{props.bestRev}</p>
                </div>
            </div>

            <div className="barchart">
                <Chart 
                props={props} />
            </div>
        </div>
    </div>
  )
}

export default Card