import "./PortalPage.css";
import { useState } from "react";
import JournalPage from "../JournalPage/JournalPage";
import AuthPage from "../AuthPage/AuthPage";

export default function PortalPage() {
    const [astronaut, setAstronaut] = useState(null);

    return (
        <main id="portal-page">
            {astronaut !== null ?
                <JournalPage />
                :
                <AuthPage />
            }
        </main>
    )
}

