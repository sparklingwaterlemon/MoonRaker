import "./JournalPage.css";
import PortalNavBar from "../../components/portal/PortalNavBar/PortalNavBar";
import * as usersService from "../../utilities/portal/users-service";

export default function JournalPage({ setUser }){
    async function handleCheckToken(){
        const expDate = await usersService.checkToken();
        console.log(expDate);
    };


    return(
        <section id="journal-page">
            <PortalNavBar setUser={setUser}/>
            
            <h1> Journal Page</h1>
            <button onClick={handleCheckToken}> Check when login expires </button>
        </section>
    )
}