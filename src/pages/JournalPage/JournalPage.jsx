import "./JournalPage.css";
import PortalNavBar from "../../components/portal/PortalNavBar/PortalNavBar";

export default function JournalPage({ setUser }){
    return(
        <section id="journal-page">
            <PortalNavBar setUser={setUser}/>
            
            <h1> Journal Page</h1>
        </section>
    )
}