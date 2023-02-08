import "./JournalPage.css";
import PortalNavBar from "../../components/portal/PortalNavBar/PortalNavBar";
import * as UserService from "../../utilities/portal/users-service";

export default function JournalPage({ setUser }){
    async function handleCheckToken(){
        const expUnix = await UserService.checkToken();
        const expDate = new Date(expUnix * 1000);
        alert(expDate.toString());
    };


    return(
        <section id="journal-page">
            <PortalNavBar setUser={setUser}/>
            
            <h1> Journal Page</h1>
            <button onClick={handleCheckToken}> Check when login expires </button>
        </section>
    )
}