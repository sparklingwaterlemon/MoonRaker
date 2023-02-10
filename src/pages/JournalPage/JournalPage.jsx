// import * as usersService from "../../utilities/portal/users-service";
// <button onClick={handleCheckToken}> Check when login expires </button>
// async function handleCheckToken(){
//     const expDate = await usersService.checkToken();
//     console.log(expDate);
// };

// <form id="j-search-form" role="search" onSubmit={handleJSearch}>
//    <input
//        autocomplete="off"
//        id="q"
//        aria-label="Search entries"
//        placeholder="Search"
//        type="search"
//        name="q"
//    />
//    <div className="sr-only" aria-live="polite" />
//</form>



import "./JournalPage.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../utilities/portal/journals-api";

import PortalNavBar from "./PortalNavBar";
import SideBar from "./SideBar";
// import JournalEntry from "./JournalEntry";
import NewEntry from "./NewEntry";


export default function JournalPage({ user, setUser }) {
    const [allEntries, setAllEntries] = useState([]);
    const [activeEntry, setActiveEntry] = useState([]);
    // const [toggleToNewEntry, setToggleToNewEntry] = useState(false);
 
    useEffect(() => {
        journalAPI.getAll().then(allEntries => {
            allEntries ? setAllEntries(allEntries) : setAllEntries([])
        });
    }, []);




 


    return (
        <>
            <main id="journal-page">
                <PortalNavBar user={user} setUser={setUser} />
        
                <SideBar 
                    allEntries={allEntries}
                    activeEntry={activeEntry} 
                    setActiveEntry={setActiveEntry}
                />

                <NewEntry />                
                {/* <JournalEntry 
                    activeEntry={activeEntry} 
                /> */}


                {/* {toggleToNewEntry ?
                    <NewEntry />
                    :
                    <JournalEntry selectedEntry={selectedEntry} />
                } */}
            </main>
        </>
    )
}