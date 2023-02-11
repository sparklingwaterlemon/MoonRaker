import "./SideBar.css";
import { useEffect, useState } from "react";

export default function SideBar({ allEntries, activeEntry, setActiveEntry, toggleToNewEntry, setToggleToNewEntry }) {
    const [entries, setEntries] = useState([]);

    const formattedDate = (x) => {
        return new Date(x).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };




    useEffect(() => {
        const entries = allEntries.map((entry) => {
            let subject = entry.subject
            // to shorten subject display:
            if (subject.length > 8) {
                subject = subject.slice(0, 8) + "...";
            };

            return (
                <li
                    key={entry._id}
                    onClick={() => {
                        setActiveEntry(entry);
                        setToggleToNewEntry(false);
                    }}
                    className={activeEntry && entry._id === activeEntry._id ? "active" : ""}
                >
                    <h3>{subject}</h3>
                    <p>{formattedDate(entry.createdAt)}</p>
                </li>
            );
        });

        setEntries(entries);
        // eslint-disable-next-line
    }, [activeEntry, allEntries]);



    return (
        <section id="j-sidebar">
            <div id="j-b">
                <h1> Journal</h1>
                <button
                    id="sidebar-btn"
                    type="submit"
                    onClick={() => setToggleToNewEntry(!toggleToNewEntry)}
                >
                    New Entry
                </button>
            </div>


            <nav>
                <ul>
                    {entries}
                </ul>
            </nav>
        </section>
    )
};