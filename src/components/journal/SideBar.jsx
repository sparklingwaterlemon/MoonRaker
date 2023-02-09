import "./SideBar.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../utilities/portal/journals-api";

export default function SideBar({ newEntry, setNewEntry,setSelectedEntry }) {
    const [entries, setEntries] = useState([]);

    // useEffect(() => {
    //     journalAPI.getAll().then(entries => {
    //         entries ? setEntries(entries) : setEntries([])
    //     });
    // }, []);
    
    const handleEntryClick = (entry) => {
        setSelectedEntry(entry);
    };

    return (
        <section id="j-sidebar">
            <h1> Journal Entries </h1>
            <div>
                <button type="submit" onClick={() => setNewEntry(!newEntry)}>New</button>
            </div>

            <nav>
                <ul>
                    {entries.map(entry => (
                        <li key={entry._id} onClick={() => handleEntryClick(entry)}>
                            <h3>{entry.subject}</h3>
                            <p>{entry.formattedDate}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}