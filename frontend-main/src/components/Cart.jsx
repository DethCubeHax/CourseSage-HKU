import './Cart.css'
import verifyUser from '../scripts/VerifyUser'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import getCartData from '../scripts/CartDataRetriever'
import removeCourse from '../scripts/RemoveCourse'
import { useReducer } from 'react'

const Cart = () => {
    const [verification, verificationSetter] = useState("")
    const [reducerValue, forceUpdate] = useReducer(x=>x+1,0)
    const [cartData, cartDataSetter] = useState("")

    const asyncFunctionHandler = async () => {
        const data = await verifyUser();
        verificationSetter(data);
        const data2 = await getCartData();
        cartDataSetter(data2);
    }

    useEffect(()=>{
        asyncFunctionHandler()
    },[reducerValue])

    const UserCart = () => {
        console.log("User status: " + verification);
        if (verification==="Verified"){
            return(
                <div>
                    <CartDataHandler></CartDataHandler>
                </div>
            )
        }
        else{
            return(
                <div className='cartText'>
                    <Link to="/register" class="blue_text">Register </Link>or 
                    <Link to="/login" class="blue_text"> Sign in</Link> to your account to see your course cart and estimated GPA!
                </div>
            )
        }
    }
    const CourseCard = ({props}) => {
        if (props.courseCode==="AVERAGE"){
            return(
                <div className="average">
                    <div>Estimated SGPA: {props.gpa.toFixed(2)}</div>
                </div>
            )
        }
        else{
            return(
                <div className="cartDiv">
                    <Link to={"/searched/"+props.courseCode}>
                        <div className="courseTitle">
                                {props.courseCode}
                        </div>
                        <div className="expectedGPA">
                                Average GPA: {props.gpa.toFixed(2)}
                        </div>
                    </Link>
                    <div>
                        <button className="red_btn" onClick={()=>{removeCourse(props.courseCode);window.location.reload(false)}}>Remove Course</button>
                    </div>
                </div>
            )
        }

    }
    
    const CartDataHandler = () => {
        console.log(cartData);
        if (cartData.length>0){
            return(
                <div>
                    {cartData.map((value, index) => {
                        return(
                            <CourseCard props={value}></CourseCard>
                        )
                    })}
                </div>

            )

        }
        else{
            return(
                <div>No courses added yet, hit the plus icon next to the search bar to add!</div>
            )
        }

    }




    


    return(
        <div className="cartDiv">
            <UserCart></UserCart>
        </div>
    )
}

export default Cart;