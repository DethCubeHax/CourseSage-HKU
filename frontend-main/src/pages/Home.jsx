import React, { useEffect } from 'react';
import Card from '../components/Card';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RevCard from '../components/RevCard';
import CourseGradePage from './CourseGradePage';
import Axios from "axios";

const courseList = [
    {courseCode: "ACCT1101",
    courseName: "Introduction to Financial Accounting",
    instructors: ["Lee,Kyung Ran", "She,Guoman", "Wang,Linghuan Lynn", "Kwong,Sze Ting Jasmine"],
    bestRev:  "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
    gradeList: [1,2,3,4,5],
    gradeListDetailed: [1,2,3,4,5,7,6,4,5,7,6]},

    {courseCode: "ACCT1102",
    courseName: "Introduction to Financial Accounting",
    instructors: ["Lee,Kyung Ran", "She,Guoman", "Wang,Linghuan Lynn", "Kwong,Sze Ting Jasmine"],
    bestRev:  "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
    gradeList: [1,2,3,4,5],
    gradeListDetailed: [1,2,3,4,5,7,6,4,5,7,6]},

    {courseCode: "ACCT1103",
    courseName: "Introduction to Financial Accounting",
    instructors: ["Lee,Kyung Ran", "She,Guoman", "Wang,Linghuan Lynn", "Kwong,Sze Ting Jasmine"],
    bestRev:  "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
    gradeList: [1,2,3,4,5],
    gradeListDetailed: [1,2,3,4,5,7,6,4,5,7,6]},

    {courseCode: "ACCT1104",
    courseName: "Introduction to Financial Accounting",
    instructors: ["Lee,Kyung Ran", "She,Guoman", "Wang,Linghuan Lynn", "Kwong,Sze Ting Jasmine"],
    bestRev:  "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
    gradeList: [1,2,3,4,5],
    gradeListDetailed: [1,2,3,4,5,7,6,4,5,7,6]},

    {courseCode: "ACCT1105",
    courseName: "Introduction to Financial Accounting",
    instructors: ["Lee,Kyung Ran", "She,Guoman", "Wang,Linghuan Lynn", "Kwong,Sze Ting Jasmine"],
    bestRev:  "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
    gradeList: [1,2,3,4,5],
    gradeListDetailed: [1,2,3,4,5,7,6,4,5,7,6]},

    {courseCode: "ACCT1106",
    courseName: "Introduction to Financial Accounting",
    instructors: ["Lee,Kyung Ran", "She,Guoman", "Wang,Linghuan Lynn", "Kwong,Sze Ting Jasmine"],
    bestRev:  "I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
    gradeList: [1,2,3,4,5],
    gradeListDetailed: [1,2,3,4,5,7,6,4,5,7,6]}
]

const courseRevList = [
    {
        courseCode: "ACCT1101",
        courseName: "Introduction to Financial Accounting",
        courseReviews: ["I feel that this course is very interesting and I fell in love with accounting hahaha Full marks for midterm maybe final too Anyway there is nothing wrong with the answer and no accident A in the end",
                        "Jasmine is super nice English is very good and looks beautiful Good at teaching too",
                        "wl is small as long as the homework is finished you can get full homework points GP must find a good teammate Everyone can do it quickly Jasmine is so beautiful The lecture rules are also very clear Year 1 is so happy to be able to attend Jasmines class",
                        "Teacher Jasmine is beautiful and kind The lectures are fairly detailed but in fact it‚Äôs okay to pass the lecture after all it‚Äôs all in the textbooks It‚Äôs not difficult at the end of the middle term and the tutor is also very friendly Remember to brush the questions the last A",
                        "very good grad",
                        "Simple and basic accounting class it is better to give points here I strongly recommend the kindhearted Jasmine   Good English clear lectures good grades good looks and I asked her to help write a recommendation letter when I changed my major",
                        "Olivia is so cute Because it was the afternoon class I saw many students were very sleepy and even bought us sour candies Lectures are also fun The unspoken rules of the business school class need to pull curv maybe the class is too simple and there are too many As The absolute score is obviously A woo woo woo"
                    ],
        positivity: [0.9514653, 0.88381404, 0.8015666, 0.7618263, 0.7179695, 0.7113937, 0.68775207, 0.6774518, 0.6630249, 0.6200911, 0.6038591, 0.5192287, 0.5036624, 0.4346099, 0.39620933, 0.30017233,0.2641734 ,0.24582438, 0.16832131, 0.15503797, 0.13489337, 0.05200941, 0.040517766, 0.02402413, 0.013435159, 0.009198183] 
    }
]

function Home() {

  const [activeTab, setActiveTab] = useState("by-grades");
  // const [openModal, setOpenModal] = useState(false);
  let params = useParams();
  // console.log("modal state = "+ openModal);

  const [data2,setData] = useState();

  const getData = async() => {
    // const check = localStorage.getItem("check");
    // if (check) {
    //     setData(JSON.parse(check))
    // }
    // else {
    //     const receipt = await Axios.get("http://localhost:8000/");
    //     localStorage.setItem("check",JSON.stringify(receipt.data));
    //     setData(receipt.data);
    // }
    const receipt = await Axios.get("http://localhost:8000/");
    setData(receipt.data);
  };

  useEffect(() => {
    getData()
  },[]);
  console.log("laods?")
  console.log(data2);
  return (

    <div>
        <div>
            <DetailWrapper>
                <div className="button-div" style={{paddingBottom: "40px"}}>
                    <p style={{marginRight: "2rem", marginTop: "8px"}}>Sort Courses:</p>     
                    <Button className={activeTab === "by-grades" ? "active" : ""} onClick={() => setActiveTab("by-grades")}>By Best Graded Courses</Button>
                    <Button className={activeTab === "by-reviews" ? "active" : ""} onClick={() => setActiveTab("by-reviews")}>By Best Reviews/Least Workload</Button>
                </div>
                {/* <div className="fac-name" style={{fontSize: "28px", fontWeight: "bold", padding: "20px", marginLeft: "30px"}}>
                    Faculty of {params.name.charAt(0).toUpperCase()+params.name.slice(1)}
                </div> */}
                <div>
                    {/* <div>{data2.courseCode}</div> */}
                    {data2 && <Card 
                        courseCode={data2.courseCode}
                        courseName={data2.courseName}
                        instructors={data2.courseInstructors}
                        bestRev={data2.bestReview}
                        gradeList={data2.gradeList}
                        gradeListDetailed={data2.gradeListDetailed}
                    />}
                    {activeTab === "by-grades" &&
                        courseList.map((course) => {
                            return(

                                <div>
                                {/* <Link to={"/courses/grades/"+course.courseCode} > */}
                                    <Card 
                                        courseCode={course.courseCode}
                                        courseName={course.courseName}
                                        instructors={course.instructors}
                                        bestRev={course.bestRev}
                                        gradeList={course.gradeList}
                                        gradeListDetailed={course.gradeListDetailed}
                                    />
                                    {/* <CourseGradePage open={openModal} /> */}
                                {/* </Link> */}
                                </div>
                            )
                        })
                    }
                    {
                        activeTab === "by-reviews" &&
                            courseRevList.map((course) => {
                                return (
                                    <Link to={"/courses/reviews/"+course.courseCode}>
                                        <RevCard 
                                            courseCode={course.courseCode}
                                            courseName={course.courseName}
                                            courseReviews={course.courseReviews}
                                            positivity={course.positivity}
                                        />
                                    </Link>
                                )
                            }) 
                    }
                </div>
            </DetailWrapper>
        </div>
    </div>
    
  )
}

const DetailWrapper = styled.div`
    .button-div {
        display: flex;
        width: 90%;
        margin: auto;
    }
    .active {
        background: #89CBF3;
        color: white;
    }
`;

const Button = styled.button`
    padding: 0.4rem;
    color: #313131;
    background: white;
    border: 2px solid #89CBF3;
    border-radius: 1rem;
    margin-right: 2rem;
    font-weight: 600;
    width: 300px;
`;

export default Home;
export {courseList,courseRevList};