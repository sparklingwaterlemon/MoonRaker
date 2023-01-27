import "./PortalPage.css";
import { useState } from "react";
import JournalPage from "../JournalPage/JournalPage";
import AuthPage from "../AuthPage/AuthPage";

export default function PortalPage() {
    const [user, setUser] = useState(null);

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

