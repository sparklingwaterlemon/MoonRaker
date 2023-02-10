import "./SideBar.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../utilities/portal/journals-api";

export default function SideBar({ allEntries, activeEntry, setActiveEntry }) {
    const entries = allEntries.map((entry)=>
        <li
            key={entry._id}
            className={entry._id === activeEntry._id ? "active" : "" } 
            onClick={() => setActiveEntry(entry)}
        >
            <h3>{entry.subject}</h3>
            <p>{entry.formattedDate}</p>
        </li>
    );


    return (
        <section id="j-sidebar">
            <h1> Journal Entries </h1>
            {/* <div>
                <button type="submit" onClick={() => setToggleToNewEntry(!toggleToNewEntry)}>New</button>
            </div> */}

            <nav>
                <ul>
                    {entries}
                </ul>
            </nav>
        </section>
    )
}