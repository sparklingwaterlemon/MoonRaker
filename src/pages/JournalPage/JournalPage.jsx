import "./JournalPage.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../utilities/portal/journals-api"

import PortalNavBar from "./components/PortalNavBar"
import SideBar from "./components/SideBar";
import JournalEntry from "./components/JournalEntry";
import NewEntry from "./components/NewEntry"


export default function JournalPage({ user, setUser }) {
    const [allEntries, setAllEntries] = useState([]);
    const [activeEntry, setActiveEntry] = useState([]);
    const [toggleToNewEntry, setToggleToNewEntry] = useState(false);
    const [newEntry, setNewEntry] = useState({
        subject: "",
        body: "",
    });
    
 
    
    useEffect(() => {
        const getAllEntries = () => {
            journalAPI.getAll().then(allEntries => {
                console.log("getting all entries 1");
                allEntries ? setAllEntries(allEntries) : setAllEntries([])
            });
        }
        getAllEntries();
    }, []);




    return (
        <>
            <main id="journal-page">
                <PortalNavBar user={user} setUser={setUser} />
        
                <SideBar 
                    allEntries={allEntries}
                    activeEntry={activeEntry} 
                    setActiveEntry={setActiveEntry}
                    toggleToNewEntry={toggleToNewEntry} 
                    setToggleToNewEntry={setToggleToNewEntry}
                />

                {toggleToNewEntry ?
                    <NewEntry 
                        newEntry={newEntry} 
                        setNewEntry={setNewEntry}
                        setAllEntries={setAllEntries}
                        toggleToNewEntry={toggleToNewEntry} 
                        setToggleToNewEntry={setToggleToNewEntry}
                    />
                    :
                    <JournalEntry activeEntry={activeEntry} />
                }
            </main>
        </>
    )
}