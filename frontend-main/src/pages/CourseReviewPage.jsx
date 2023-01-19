import React from 'react';
import { useLocation } from 'react-router-dom';
import { DoughnutGraph } from '../components/DoughnutGraph';
import UserReview from '../components/UserReview';
import './CourseReviewPage.css'

function CourseReviewPage() {
  const location = useLocation();
  console.log("locationwhat?")
  console.log(location.state.props)
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