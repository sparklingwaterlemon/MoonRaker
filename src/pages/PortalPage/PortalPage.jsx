import "./PortalPage.css";
import { useState } from "react";
import JournalPage from "../JournalPage/JournalPage";
import TestPageOne from "../TestPageOne/TestPageOne";

export default function PortalPage() {
    const [astronaut, setAstronaut] = useState();
    
    return (
        <main id="portal-page">
            {astronaut !== undefined ?
                <TestPageOne />
                :
                <JournalPage />
            }
        </main>
    )
}

