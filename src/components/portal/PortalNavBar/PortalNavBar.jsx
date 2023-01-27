import "./PortalNavBar.css";
import { Link } from "react-router-dom";
import { logOut } from "../../../utilities/portal/users-service";

export default function PortalNavBar({ setUser }){
    function handleLogOut(){
        logOut();
        setUser(null);
    };

    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/" onClick={handleLogOut}> Log Out </Link></li>
            </ul>
        </nav>
    )
}