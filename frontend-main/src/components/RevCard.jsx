import React from 'react';
import { Chart } from './Chart';
import "./RevCard.css"
import { DoughnutGraph } from './DoughnutGraph';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function RevCard(props) {
    return (
    
    <Link to={"/courses/reviews/"+props.courseCode} state={{ props: props }}>
        <div className="master">
            <div className="leftcol" style={{width: "30%"}}>
                <h1 style={{fontSize: "22px", fontWeight: "bold"}}>
                    {props.courseCode}: {props.courseName}
                </h1>
                {/* <div style={{paddingLeft: "30px",fontSize: "14px", paddingTop: "10px"}}>
                    {props.instructors.map((instructor) => {
                        return (
                            <p>{instructor}</p>
                        )
                    })}
                </div> */}
                <div style={{paddingLeft: "30px", paddingTop: "8px", fontSize: "12px", width: "400px"}}>
                    <div style={{fontSize: "15px", fontWeight: "bold"}}>Reviews:</div> 
                    {props.allReviews.filter((item,index) => index < 4).map(((reviews) => {
                        return (
                            <p style={{paddingBottom: "3px"}}>{reviews.actualReview.substring(0,100)}<b style={{color: "blue"}}> .....Read More</b></p>
                        )
                    }))}
                    {/* <p style={{paddingBottom: "3px"}}>{rev1.substring(0,100)}<b style={{color: "blue"}}> .....Read More</b></p>
                    <p style={{paddingBottom: "3px"}}>{rev2.substring(0,100)}<b style={{color: "blue"}}> .....Read More</b></p>
                    <p style={{paddingBottom: "3px"}}>{rev3.substring(0,100)}<b style={{color: "blue"}}> .....Read More</b></p>
                    <p style={{paddingBottom: "3px"}}>{rev4.substring(0,100)}<b style={{color: "blue"}}> .....Read More</b></p> */}
                </div>
            </div>
            <div style={{width: "500px", paddingLeft: "150px", fontSize: "12px", paddingTop: "50px", paddingRight: "30px"}}>
                <p style={{fontSize: "15px", fontWeight: "bold", paddingTop: "13px"}}>Number of reviews:</p>
                <ul>
                    <li>1.0-Positivity-0.8: Loved the course!</li>
                    <li>0.8-Positivity-0.6-Didnt mind the course!</li>
                    <li>0.6-Positivity-0.4: Bearable course!</li>
                    <li>0.4-Positivity-0.2-Unbearable course!</li>
                    <li>0.2-Positivity-0.0-Hated the course!</li>
                </ul>
            </div>
            <div className="barchart">
                {/* <AreaChart /> */}
                <DoughnutGraph reviewRanges={props.reviewRanges} />
            </div>

        </div>
    </Link>
  )
}

export default RevCard