import "./PortalLinkComponent.css";
import { Link } from "react-router-dom";

export default function PortalLinkComponent() {
    return (
        <div className="portal-link-container">
            <Link to="portal" className="portal-link">
                Portal
            </Link>
        </div>
    )
}