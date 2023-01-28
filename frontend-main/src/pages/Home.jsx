import React, { useEffect } from 'react';
import Card from '../components/Card';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RevCard from '../components/RevCard';
import CourseGradePage from './CourseGradePage';
import Axios from "axios";
import ReactPaginate from 'react-paginate';
import "./Home.css";
import Cart from "../components/Cart"

const PER_PAGE = 10;

function Home() {

  const [activeTab, setActiveTab] = useState("by-grades");
  const [currentPage, setCurrentPage] = useState(0);
  // const [openModal, setOpenModal] = useState(false);
  let params = useParams();
  // console.log("modal state = "+ openModal);

  const [data2,setData] = useState();

  const getData = async() => {

    const receipt = await Axios.get("http://localhost:8000/FBE");
    setData(receipt.data);
  };

  useEffect(() => {
    getData()
  },[]);
  console.log("laods?")
  console.log(data2);

  const offset = currentPage * PER_PAGE;
  let pageCount = 160;

  function handlePageClick({selected: selectedPage}) {
    setCurrentPage(selectedPage)
  }

  return (

    <div>
        <div>
            <DetailWrapper>
                <div className="button-div" style={{paddingBottom: "40px"}}>
                    <p style={{marginRight: "2rem", marginTop: "8px"}}>Sort Courses:</p>     
                    <Button className={activeTab === "by-grades" ? "active" : ""} onClick={() => setActiveTab("by-grades")}>By Best Graded Courses</Button>
                    <Button className={activeTab === "by-reviews" ? "active" : ""} onClick={() => setActiveTab("by-reviews")}>By Best Reviews/Least Workload</Button>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{flex:"65%"}}>
                        <div className="fac-name" style={{fontSize: "28px", fontWeight: "bold", padding: "20px", marginLeft: "30px"}}>
                            Faculty of Business and Economics
                        </div>
                            {activeTab === "by-grades" &&
                                data2 && 
                                    data2.sortedByGrades
                                    .slice(offset, offset + PER_PAGE)
                                    .map((course1) => {

                                        let courseGrades = course1.gradeList;
                                        if (courseGrades === null) {
                                            courseGrades = [0,0,0,0,0]
                                        }

                                        let courseGradesDetailed = course1.gradeListDetailed;
                                        if (courseGradesDetailed === null) {
                                            courseGradesDetailed = [0,0,0,0,0,0,0,0,0,0,0,0,0]
                                        }

                                        let review = course1.bestReview;
                                        if (review !== null) {
                                            review = review[4]
                                        }
                                        const capitalizeWords = (str) => {
                                            return str
                                            .toLowerCase()
                                            .split(' ' || ' (')
                                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ');
                                        };
                                        let courseName1 = capitalizeWords(course1.courseName);
                                        
                                        return (
                                            <Card 
                                                courseCode={course1.courseCode}
                                                courseName={courseName1}
                                                instructors={course1.courseInstructor}
                                                bestRev={review}
                                                gradeList={courseGrades}
                                                gradeListDetailed={courseGradesDetailed}
                                            />
                                        )
                                })
        
                            }
                            {
                                activeTab === "by-reviews" && 
                                    data2 &&
                                        data2.sortedByReviews
                                        .slice(offset, offset + PER_PAGE)
                                        .map((course) => {

                                        const capitalizeWords = (str) => {
                                            return str
                                            .toLowerCase()
                                            .split(' ' || ' (')
                                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(' ');
                                        };
                                        let courseName1 = capitalizeWords(course.courseName);
                                            return (

                                                <RevCard 
                                                    courseCode={course.courseCode}
                                                    courseName={courseName1}
                                                    reviewRanges={course.reviewRanges}
                                                    allReviews={course.allReviews}
                                                />

                                            )
                                        }) 
                            }
                    </div>
                    
                    
                    <div style={{flex: "35%"}}>
                        <div>
                            <div className="fac-name" style={{fontSize: "28px", fontWeight: "bold", padding: "20px", marginLeft: "30px"}}>
                                Course Basket
                            </div>
                            <div>
                                <Cart></Cart>
                            </div>
                        </div>
                    </div>
                </div>

            </DetailWrapper>
        </div>
        <div className='container'>
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
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