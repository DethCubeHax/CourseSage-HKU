import React from 'react';
import './UserReview.css';
import {FaUserNinja, FaUserCircle} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

function UserReview(props) {
  // console.log(props)
  const review = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.my name is wasif latif hussain";
  return (
    <div className="boxing">
    {/* UserReview */}
        <div className="icon">
            <FaUserCircle size={50} color="#1e94d9" />
            <p style={{paddingTop: "15px", fontWeight: "bold", fontSize: "14px", color: "black"}}>Review Positivity Level-</p>
            <p style={{paddingTop: "1px", fontWeight: "bold", fontSize: "14px", color: "#1e94d9"}}>{props.positivityScore.toString().slice(0,5)} out of 1.00</p>
            
        </div>  
        <div className='description'>
            <div style={{paddingLeft: "20px", paddingTop: "10px", display: "flex", fontWeight: "bold"}}>Anonymous User <MdVerified style={{paddingTop: "4px", paddingLeft: "4px"}} size={20}/></div>
            <div style={{paddingLeft: "20px", paddingTop: "4px"}}>{props.reviewData.substring(0,500)}. . . . . . </div>
        </div>
    </div>
    
  )
}

export default UserReview