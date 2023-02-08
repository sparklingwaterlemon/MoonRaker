import "./JournalPage.css";
import PortalNavBar from "../../components/portal/PortalNavBar/PortalNavBar";
import * as usersService from "../../utilities/portal/users-service";

export default function JournalPage({ setUser }){
    async function handleCheckToken(){
        usersService.checkToken();
    };


    return(
        <section id="journal-page">
            <PortalNavBar setUser={setUser}/>
            
            <h1> Journal Page</h1>
            <button onClick={handleCheckToken}> Check when login expires </button>
        </section>
    )
}