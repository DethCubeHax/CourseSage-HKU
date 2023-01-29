import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { DoughnutGraph } from '../components/DoughnutGraph';
import UserReview from '../components/UserReview';
import './CourseReviewPage.css';

function CourseReviewPage() {
  const location = useLocation();
  // console.log("locationwhat?")
  // console.log(location.state.props)
  const [data2,setData] = useState();
  const params = useParams();
  console.log(params.name)

  const getData = async() => {
    const receipt = await Axios.get("http://localhost:8000/reviews/"+params.name);
    setData(receipt.data);
    // console.log(receipt.data)
  };

  useEffect(() => {
    if (location.state.props.bestRev !== undefined) {
      console.log("Yessir")
      getData()
      
      
    }
    else {
      console.log("nooooo")
      setData(location.state.props)

    }
  },[]);
  // getData();
  console.log(data2)
  const capitalizeWords = (str) => {
      return str
      .toLowerCase()
      .split(' ' || ' (')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  return (
   
    <div style={{}}>
     {data2 && 
      <div>
        <h1 style={{fontSize: "25px", fontWeight: "bold", paddingLeft: "30px"}}>{data2.courseCode}: {capitalizeWords(data2.courseName)}</h1>
        <div style={{width: "400px", height: "300px", paddingTop: "10px",paddingLeft: "50px"}}>
          <DoughnutGraph reviewRanges={data2.reviewRanges}/>
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
      </div>}

      {data2 && <div style={{padding: "0", margin: "0"}}>
      {data2.allReviews.map((review) => {
          return(
            <UserReview 
            reviewData={review.actualReview}
            positivityScore={review.positivityScore}
          />
          )
      })}
      </div>}
    </div>
  )
}

export default CourseReviewPage