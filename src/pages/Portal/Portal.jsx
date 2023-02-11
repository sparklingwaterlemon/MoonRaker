import "./Portal.css";
import { useState } from "react";
import { getUser } from "./utilities/users-service";

import JournalPage from "./pages/JournalPage/JournalPage";
import AuthPage from "./pages/AuthPage/AuthPage";


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

