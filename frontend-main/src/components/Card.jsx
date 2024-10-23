import React, { useState, useEffect } from 'react';
import { Chart } from './Chart';
import "./Card.css"
import Modal from '../pages/Modal';
import CourseReviewPage from '../pages/CourseReviewPage';
import CourseGradePage from '../pages/CourseGradePage';
import { IconButton } from '@chakra-ui/react';
import verifyUser from '../scripts/VerifyUser';
import addCourse from '../scripts/AddCourse';
import { PlusSquareIcon } from '@chakra-ui/icons';


function Card(props) {
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

    const [openModal, setOpenModal] = useState(false);
  
    return (
    <div style={{display:"flex"}}>
        {/* <div style={{flex:"70%", background:"red"}}> */}
        <div className="optimusc" onClick={() => setOpenModal(true)}>
            <CourseGradePage 
            open={openModal} 
            onClose={() => setOpenModal(false)}
            props={props} />


            <div className="masterc">
                <div className="leftcolc">
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
                        <div style={{fontSize: "18px", fontWeight: "bold"}}>Best Review:</div> 
                        <p style={{fontSize: "14px"}}>{props.bestRev}</p>
                    </div>
                </div>

                <div className="barchartc">
                    <Chart 
                    props={props} />
                </div>
            </div>
        </div>
        {/* </div> */}


        <div style={{marginLeft: "4px"}}>
            <AddCourseButton></AddCourseButton>
        </div>
    </div>
  )
}

export default Card