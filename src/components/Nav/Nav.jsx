import {Link} from "react-router-dom";
import "./Nav.css"

export default function Nav(props){
    return(
        <div className="nav">
            <Link to="/">
                <div>Home Page</div>
            </Link>
            <Link to="/Login">
                <div>Login</div>
                </Link>
                <Link to="/Signup">
                <div>Signup</div>
                </Link>
                <Link to="/ContactUs">
                <div>Contact Us</div>
                </Link>
        </div>
    );

}