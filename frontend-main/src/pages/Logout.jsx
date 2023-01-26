import {Link, useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    sessionStorage.removeItem("token")
    navigate('/')
}

export default Logout;
