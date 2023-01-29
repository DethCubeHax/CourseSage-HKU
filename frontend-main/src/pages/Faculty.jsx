import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


import { Link } from 'react-router-dom';
import Card from '../components/Card';
import RevCard from '../components/RevCard';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import "./Faculty.css";
import Cart from '../components/Cart';

const PER_PAGE = 10;

function Faculty() {
  
  const [activeTab, setActiveTab] = useState("by-grades");
  const [currentPage, setCurrentPage] = useState(0);
  let params = useParams();
//   console.log("errverv ");
  console.log(params.name);

  let statement = "";

  if (params.name.charAt(0) === "C") {
    statement = "Courses available for";
  }
  else if (params.name.charAt(0) !== "C") {
    statement = "Faculty of";
  }
  else if (params.name.charAt(0) === null) {
    statement = "Faculty of Architecture"
  }
  

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
    let requestUrl = ""
    if (params.name === "Graduate School") {
        requestUrl = "http://localhost:8000/graduate"
    }
    else if (params.name === "Business and Economics") {
        requestUrl = "http://localhost:8000/FBE"
    }
    else if (params.name === "Social Sciences") {
        requestUrl = "http://localhost:8000/social"
    }
    else if (params.name === "Center for Applied English Studies") {
        requestUrl = "http://localhost:8000/CAES"
    }
    else {
        requestUrl = "http://localhost:8000/"+params.name
    }
    const receipt = await Axios.get(requestUrl);
    setData(receipt.data);
  };

  useEffect(() => {
    getData()
  },[]);
  console.log("laods?")
  console.log(data2);

  const offset = currentPage * PER_PAGE;
  const pageCount = 100;

  function handlePageClick({selected: selectedPage}) {
    setCurrentPage(selectedPage)
  }

  return (
    <div>
        <div style={{display:"flex"}}>
            <div style={{flex:"70%"}}>
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
                                    if (review !== null && ((params.name === "Graduate School") || (params.name === "education"))) {
                                        review = review[1]
                                    }
                                    else if(review !== null && params.name !== "Graduate") {
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
                                        return (

                                            <RevCard 
                                                courseCode={course.courseCode}
                                                courseName={course.courseName}
                                                reviewRanges={course.reviewRanges}
                                                allReviews={course.allReviews}
                                            />

                                        )
                                    }) 
                        }
                    </div>
                </DetailWrapper>  
            </div>
            <div style={{flex:"30%"}}>
                <div className="fac-name" style={{fontSize: "28px", fontWeight: "bold", padding: "20px", marginLeft: "30px"}}>
                                Course Basket
                </div>
                <div>
                    <Cart></Cart>
                </div>
                
            </div>              
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


export default Faculty