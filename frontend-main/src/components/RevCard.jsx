import React from 'react';
import { Chart } from './Chart';
import "./RevCard.css"
import { DoughnutGraph } from './DoughnutGraph';
import { AreaChart } from './AreaChart';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const word = ".....Read More";
function RevCard(props) {
    // const instructors = props.instructors;
    // console.log("instructors are: ")
    // console.log(props)
    // console.log(instructors)
    const courseCode = "ACCT1101";
    const courseName = "Introduction to Financial Accounting";
    const courseReviews = ["I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
                        "Jasmine is super nice English is very good and looks beautiful Good at teaching too",
                        "wl is small as long as the homework is finished you can get full homework points GP must find a good teammate Everyone can do it quickly Jasmine is so beautiful The lecture rules are also very clear Year 1 is so happy to be able to attend Jasmines class",
                        "Teacher Jasmine is beautiful and kind The lectures are fairly detailed but in fact it‚Äôs okay to pass the lecture after all it‚Äôs all in the textbooks It‚Äôs not difficult at the end of the middle term and the tutor is also very friendly Remember to brush the questions the last A",
                        "very good grad",
                        "Simple and basic accounting class it is better to give points here I strongly recommend the kindhearted Jasmine   Good English clear lectures good grades good looks and I asked her to help write a recommendation letter when I changed my major",
                        "Olivia is so cute Because it was the afternoon class I saw many students were very sleepy and even bought us sour candies Lectures are also fun The unspoken rules of the business school class need to pull curv maybe the class is too simple and there are too many As The absolute score is obviously A woo woo woo"
                    ];
    const rev1 = "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end";
    const rev2 = "Jasmine is super nice English is very good and looks beautiful Good at teaching too"
    const rev3 = "wl is small as long as the homework is finished you can get full homework points GP must find a good teammate Everyone can do it quickly Jasmine is so beautiful The lecture rules are also very clear Year 1 is so happy to be able to attend Jasmines class";
    const rev4 = "Teacher Jasmine is beautiful and kind The lectures are fairly detailed but in fact it‚Äôs okay to pass the lecture after all it‚Äôs all in the textbooks It‚Äôs not difficult at the end of the middle term and the tutor is also very friendly Remember to brush the questions the last A";
    const positivity = [0.9514653, 0.88381404, 0.8015666, 0.7618263, 0.7179695, 0.7113937, 0.68775207, 0.6774518, 0.6630249, 0.6200911, 0.6038591, 0.5192287, 0.5036624, 0.4346099, 0.39620933, 0.30017233,0.2641734 ,0.24582438, 0.16832131, 0.15503797, 0.13489337, 0.05200941, 0.040517766, 0.02402413, 0.013435159, 0.009198183]; 
                    
    console.log("correct?")
    console.log(props.reviewRanges)



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
                    {props.courseReviews.filter((item,index) => index < 4).map(((reviews) => {
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