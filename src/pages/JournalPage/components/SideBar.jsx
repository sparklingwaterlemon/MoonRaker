import "./SideBar.css";
import { useEffect } from "react";

export default function SideBar({ allEntries, activeEntry, setActiveEntry, toggleToNewEntry, setToggleToNewEntry }) {

    useEffect(() => {
        console.log("allEntries updated");
    }, [allEntries])


    return (
        <section id="j-sidebar">
            <h1> Journal Entries </h1>
            <div>
                <button type="submit" onClick={() => setToggleToNewEntry(!toggleToNewEntry)}>New</button>
            </div>

            <nav>
                <ul>
                    {allEntries.map((entry) =>
                        <li
                            key={entry._id}
                            className={entry._id === activeEntry._id ? "active" : ""}
                            onClick={() => setActiveEntry(entry)}
                        >
                            <h3>{entry.subject}</h3>
                            <p>{entry.formattedDate}</p>
                        </li>)}
                </ul>
            </nav>
        </section>
    )
}