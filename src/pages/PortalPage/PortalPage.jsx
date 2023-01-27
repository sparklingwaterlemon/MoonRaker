import "./PortalPage.css";
import { useState } from "react";
import JournalPage from "../JournalPage/JournalPage";
import AuthPage from "../AuthPage/AuthPage";
import { getUser } from "../../utilities/portal/users-service";

export default function PortalPage() {
    const [user, setUser] = useState(getUser());

    return (
        <main id="portal-page">
            {user !== null ?
                <JournalPage setUser={setUser}/>
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    )
}

