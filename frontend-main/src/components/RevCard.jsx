import React from 'react';
import { useState, useEffect } from 'react';
import { Chart } from './Chart';
import "./RevCard.css"
import { DoughnutGraph } from './DoughnutGraph';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {  flexbox, IconButton, transition } from '@chakra-ui/react'
import addCourse from '../scripts/AddCourse';
import { PlusSquareIcon } from '@chakra-ui/icons';
import verifyUser from "../scripts/VerifyUser"

function RevCard(props) {
    const [verified, verificationSetter] = useState("");
    const data = async () => {
        const data = await verifyUser();
        verificationSetter(data);
    }

    useEffect(() => {
        data();
    }, [])

    const AddCourseButton = () => {
        if (verified==="Verified")
        {
            return(
                <IconButton
                background="white"
                border="1px"
                borderColor="#bfbfbf"
                boxShadow="0 0px 3.5px 0 rgba(0,0,0,0.5)"
                borderRadius="15px"
                height="50px"
                width="50px"
                size={"lg"}
                transition="0.5s"
                onClick={()=>{addCourse(props); window.location.reload(false)}}
                icon={<PlusSquareIcon/>}
            />
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    return (
    <div style={{display:"flex"}}>
        {/* <div style={{flex:"95%", background:"red"}}> */}
            <div>
            <Link to={"/courses/reviews/"+props.courseCode} state={{ props: props }}>
                <div className="master">
                    <div className="leftcol" style={{width: "30%"}}>
                        <h1 style={{fontSize: "22px", fontWeight: "bold"}}>
                            {props.courseCode}: {props.courseName}
                        </h1>
                    <div style={{paddingLeft: "30px", paddingTop: "8px", fontSize: "12px", width: "400px"}}>
                        <div style={{fontSize: "15px", fontWeight: "bold"}}>Reviews:</div> 
                        {props.allReviews.filter((item,index) => index < 4).map(((reviews) => {
                            return (
                                <p style={{paddingBottom: "3px"}}>{reviews.actualReview.substring(0,100)}<b style={{color: "blue"}}>.....Read More</b></p>
                            )
                        }))}
                    </div>
                </div>
                   

                <div style={{width: "40%", paddingLeft: "150px", fontSize: "12px", paddingTop: "50px", paddingRight: "30px"}}>

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
            </div>
        {/* </div> */}
{/* 
        <div style={{flex:"5%", background:"blue"}}> */}
            <div style={{marginLeft: "4px"}}>
                <AddCourseButton></AddCourseButton>
            </div>
        {/* </div> */}
    </div>

  )
}

export default RevCard;