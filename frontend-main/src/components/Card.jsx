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
    // const instructors = props.instructors;
    // console.log("instructors are: ")
    // console.log(props)
    // console.log(instructors)
    const AddCourseButton = () => {
        if (verified==="Verified")
        {
            return(
                <IconButton
                background="white"
                border="1px"
                borderColor="#bfbfbf"
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
        <div style={{flex:"95%", background:"red"}}>
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
                    <div style={{fontSize: "18px", fontWeight: "bold"}}>Best Review:</div> 
                    <p style={{fontSize: "14px"}}>{props.bestRev}</p>
                </div>
            </div>

            <div className="barchart">
                <Chart 
                props={props} />
            </div>
        </div>
    </div>
        </div>

    <div style={{flex:"5%", background:"blue"}}>
        <div>
            <AddCourseButton></AddCourseButton>
        </div>
    </div>
    </div>
  )
}

export default Card