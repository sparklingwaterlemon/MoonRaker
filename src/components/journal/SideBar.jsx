import "./SideBar.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../utilities/portal/journals-api";

export default function SideBar({ toggleToNewEntry, setToggleToNewEntry, selectedEntry, setSelectedEntry }) {
    const [allEntries, setAllEntries] = useState([]);

    useEffect(() => {
        journalAPI.getAll().then(entries => {
            entries ? setAllEntries(entries) : setAllEntries([])
        });
    }, []);
    
    const handleEntryClick = (entry) => {
        setSelectedEntry(entry);
    };


    return (
        <section id="j-sidebar">
            <h1> Journal Entries </h1>
            <div>
                <button type="submit" onClick={() => setToggleToNewEntry(!toggleToNewEntry)}>New</button>
            </div>

            <nav>
                <ul>
                    {allEntries.map(entry => (
                        <li key={entry._id} onClick={handleEntryClick(entry)}>
                            <a>
                                <h3>{entry.subject}</h3>
                                <p>{entry.formattedDate}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}