import React from 'react';
import { DoughnutGraph } from '../components/DoughnutGraph';
import UserReview from '../components/UserReview';
import './CourseReviewPage.css'

function CourseReviewPage() {
  return (
    // <div>CourseReviewPage</div>
    <div style={{display: "flex"}}>
      <div>
        <div style={{width: "400px", height: "300px", paddingTop: "10px",paddingLeft: "50px"}}>
          {/* <DoughnutGraph /> */}
          <DoughnutGraph />
        </div>

        <div className="legend">
          <div>
            <span class="Legend-colorBox1">
            </span>
            <span class="Legend-label">
              1.0-x-0.8: Loved the course!
            </span> 
          </div>
          <div>
            <span class="Legend-colorBox2">
            </span>
            <span class="Legend-label">
              0.8-x-0.6: Didnt mind the course!
            </span> 
          </div>
          <div>
            <span class="Legend-colorBox3">
            </span>
            <span class="Legend-label">
              0.6-x-0.4: Bearable course!
            </span> 
          </div>
          <div>
            <span class="Legend-colorBox4">
            </span>
            <span class="Legend-label">
              0.4-x-0.2: Unbearable course!
            </span> 
          </div>
          <div>
            <span class="Legend-colorBox5">
            </span>
            <span class="Legend-label">
              0.2-x-0.0: Hated the course!
            </span> 
          </div>
        </div>
      </div>






    <UserReview />

      
      {/* <p>Hello</p> */}
    </div>
  )
}

export default CourseReviewPage