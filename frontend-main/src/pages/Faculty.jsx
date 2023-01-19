import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { courseList, courseRevList } from './Home';

import { Link } from 'react-router-dom';
import Card from '../components/Card';
import RevCard from '../components/RevCard';

function Faculty() {
  
  const [activeTab, setActiveTab] = useState("by-grades");
  let params = useParams();
  console.log(activeTab)

  let statement = "";

  if (params.name.charAt(0) === "C") {
    statement = "Courses available for";
  }
  else if (params.name.charAt(0) !== "C") {
    statement = "Faculty of";
  }

  return (
    <div>
        <div>
            <DetailWrapper>
                <div className="button-div">
                    <p style={{marginRight: "2rem", marginTop: "8px"}}>Sort Courses:</p>     
                    <Button className={activeTab === "by-grades" ? "active" : ""} onClick={() => setActiveTab("by-grades")}>By Best Graded Courses</Button>
                    <Button className={activeTab === "by-reviews" ? "active" : ""} onClick={() => setActiveTab("by-reviews")}>By Best Reviews/Least Workload</Button>
                </div>
                <div className="fac-name" style={{fontSize: "28px", fontWeight: "bold", padding: "20px", marginLeft: "30px"}}>
                    {/* {if params.substring(0) === "C"}  */}
                    {statement} {params.name.charAt(0).toUpperCase()+params.name.slice(1)}
                </div>
                <div>
                    {activeTab === "by-grades" &&
                        courseList.map((course) => {
                            return(
                                <div>
                                {/* <Link to={"/courses/grades/"+course.courseCode}> */}
                                    <Card 
                                        courseCode={course.courseCode}
                                        courseName={course.courseName}
                                        instructors={course.instructors}
                                        bestRev={course.bestRev}
                                        gradeList={course.gradeList}
                                        gradeListDetailed={course.gradeListDetailed}
                                    />
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


export default Faculty