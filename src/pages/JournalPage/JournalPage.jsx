import "./JournalPage.css";
import { Outlet, Link } from "react-router-dom";

import PortalNavBar from "../../components/portal/PortalNavBar/PortalNavBar";
import * as usersService from "../../utilities/portal/users-service";



export default function JournalPage({ setUser }){
    async function handleCheckToken(){
        const expDate = await usersService.checkToken();
        console.log(expDate);
    };

    function handleJSearch(evt){
        evt.preventDefault();
    }


    return(
        <>

        <section id="journal-page">
            <PortalNavBar setUser={setUser}/>
            {/* <button onClick={handleCheckToken}> Check when login expires </button> */}
            
            <div id="j-sidebar">
                <h1> Journal Entries </h1>
                <div>
                    <form id="j-search-form" role="search" onSubmit={handleJSearch}>
                        <input
                            id="q" 
                            aria-label="Search entries"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div className="sr-only" aria-live="polite" />
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to={`/contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`/contacts/2`}>Your Friend</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </section>
        </>
    )
}