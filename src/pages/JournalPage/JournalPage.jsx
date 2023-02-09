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

import PortalNavBar from "../../components/portal/PortalNavBar/PortalNavBar";
import NewEntry from "../../components/journal/NewEntry";
import SideBar from "../../components/journal/SideBar";
import JournalEntry from "../../components/journal/JournalEntry";


export default function JournalPage({ setUser }) {
    
    const [selectedEntry, setSelectedEntry] = useState(null);

    const [toggleToNewEntry, setToggleToNewEntry] = useState(false);
    // useEffect(()=>{
    //    setSelectedEntry(selectedEntry);
    // },[selectedEntry]);





 


    return (
        <>
            <main id="journal-page">
                <PortalNavBar setUser={setUser} />
                <SideBar toggleToNewEntry={toggleToNewEntry} setToggleToNewEntry={setToggleToNewEntry} selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry}/>
                {toggleToNewEntry ?
                    <NewEntry />
                    :
                    <JournalEntry selectedEntry={selectedEntry} />
                }
            </main>
        </>
    )
}