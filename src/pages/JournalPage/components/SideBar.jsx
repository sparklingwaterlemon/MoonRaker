import "./SideBar.css";
import { useEffect, useState } from "react";

export default function SideBar({ allEntries, activeEntry, setActiveEntry, toggleToNewEntry, setToggleToNewEntry }) {
    const [entries, setEntries] = useState([]);
    const [activated, setActivated] = useState("");

    const formattedDate = (x) => {
        return new Date(x).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };
    



    useEffect(() => {
        const entries = allEntries.map((entry) => {
            // to shorten subject display:
            if(entry.subject.length > 8) {
                entry.subject = entry.subject.slice(0, 8) + "...";
            };

            return (
                <li
                    key={entry._id}
                    onClick={() => setActiveEntry(entry)}
                    className={activeEntry && entry._id === activeEntry._id ? "active" : "" }
                    >
                    <h3>{entry.subject}</h3>
                    <p>{formattedDate(entry.createdAt)}</p>
                </li>
            );
        });

        setEntries(entries)
    }, [activeEntry, allEntries])


    return (
        <section id="j-sidebar">
            <h1> Journal Entries </h1>
            <div>
                <button type="submit" onClick={() => setToggleToNewEntry(!toggleToNewEntry)}>New</button>
            </div>


            <nav>
                <ul>
                    {entries}
                </ul>
            </nav>
        </section>
    )
}