import "./Portal.css";
import { useState } from "react";
import { getUser } from "../../utilities/portal/users-service"

import JournalPage from "../JournalPage/JournalPage";
import AuthPage from "../AuthPage/AuthPage";


export default function PortalPage() {
    const [user, setUser] = useState(getUser());

    return (
        <main id="portal-page">
            {user !== null ?
                <JournalPage user={user} setUser={setUser}/>
                :
                <AuthPage setUser={setUser}/>
            }
        </main>
    )
}

