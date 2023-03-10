import "./PortalNavBar.css";
import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";

export default function PortalNavBar({ user, setUser }){
    function handleLogOut(){
        logOut();
        setUser(null);
    };

    return(
        <nav id="p-navbar">
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li>Hello, {user.name}</li>
                <li><Link to="/" onClick={handleLogOut}> Log Out </Link></li>
            </ul>
        </nav>
    )
}