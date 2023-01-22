import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DoughnutGraph } from '../components/DoughnutGraph';
import UserReview from '../components/UserReview';
import './CourseReviewPage.css';

function CourseReviewPage() {
  const location = useLocation();
  // console.log("locationwhat?")
  // console.log(location.state.props.bestRev)
    const [data2,setData] = useState();
    const params = useParams();

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
      const receipt = await Axios.get("http://localhost:8000/"+params.name);
      setData(receipt.data);
    };

    // useEffect(() => {
    //   getData()
    // },[]);
  if (location.state.props.bestRev !== undefined) {
    console.log("Yessir")
    // console.log(location.state.props)
    getData()
    console.log(data2)
  }
  else {
    console.log("nooooo")
    

  }
  return (
    // <div>CourseReviewPage</div>
    <div style={{display: "flex"}}>
      <div>
        <div style={{width: "400px", height: "300px", paddingTop: "10px",paddingLeft: "50px"}}>
          {/* <DoughnutGraph /> */}
          <DoughnutGraph reviewRanges={location.state.props.reviewRanges}/>
        </div>

        <div className="legend">
          <div>
            <span className="Legend-colorBox1">
            </span>
            <span className="Legend-label">
              1.0-x-0.8: Loved the course!
            </span> 
          </div>
          <div>
            <span className="Legend-colorBox2">
            </span>
            <span className="Legend-label">
              0.8-x-0.6: Didnt mind the course!
            </span> 
          </div>
          <div>
            <span className="Legend-colorBox3">
            </span>
            <span className="Legend-label">
              0.6-x-0.4: Bearable course!
            </span> 
          </div>
          <div>
            <span className="Legend-colorBox4">
            </span>
            <span className="Legend-label">
              0.4-x-0.2: Unbearable course!
            </span> 
          </div>
          <div>
            <span className="Legend-colorBox5">
            </span>
            <span className="Legend-label">
              0.2-x-0.0: Hated the course!
            </span> 
          </div>
        </div>
      </div>




    <div style={{padding: "0", margin: "0"}}>
    {location.state.props.courseReviews.map((review) => {
        return(
          <UserReview 
          reviewData={review.actualReview}
          positivityScore={review.positivityScore}
        />
        )
    })}
    </div>
    {/* <div style={{padding: "0", margin: "0"}}>
      <UserReview />
      <UserReview />    
    </div> */}
    
    {/* <UserReview /> */}

    

      
      {/* <p>Hello</p> */}
    </div>
  )
}

export default CourseReviewPage