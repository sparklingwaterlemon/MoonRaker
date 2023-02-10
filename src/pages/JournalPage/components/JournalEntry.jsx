import "./JournalEntry.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../../utilities/portal/journals-api";

export default function JournalEntry({ allEntries, setAllEntries , activeEntry, setActiveEntry }) {
    const [update, setUpdate] = useState(false);
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {
        setSubject(activeEntry.subject);
        setBody(activeEntry.body)
    }, [activeEntry]);

    const handleSubjectChange = (evt) => {
        setSubject(evt.target.value);
    };
    const handleBodyChange = (evt) => {
        setBody(evt.target.value);
    };

    const handleUpdateClick = async (evt) => {
        evt.preventDefault();
        const updatedEntry = {
            _id: activeEntry._id,
            subject,
            body,
        };
        try {
            await journalAPI.update(updatedEntry).then((entry) => {
                setSubject(entry.subject);
                setBody(entry.body);
            });
        } catch (err) {
            throw new Error();
        }
        setUpdate(!update);
    };

    const handleDeleteClick = async (evt) => {
        try {
            await journalAPI.deleteEntry(activeEntry);
            const updatedEntries = allEntries.filter(entry => entry._id !== activeEntry._id);
            setAllEntries(updatedEntries);
            setActiveEntry(updatedEntries[0]);
        } catch (err) {
            throw new Error();
        }
    };


    const formattedDate = (x) => {
        return new Date(x).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <>
            <section id="journal-entry">
                <div>
                    {activeEntry._id ?
                        <>
                            {!update ?
                                <>
                                    <div>{subject}</div>
                                    <div>{activeEntry ? formattedDate(activeEntry.createdAt)  : ""}</div>
                                    <div>{body}</div>
                                    <button onClick={() => setUpdate(!update)}> Update</button>
                                    <button onClick={() => handleDeleteClick()}>Delete</button>
                                </>
                                :
                                <>
                                    <div><input type="text" value={subject} onChange={handleSubjectChange} /></div>
                                    <div>{activeEntry ? formattedDate(activeEntry.createdAt) : ""}</div>
                                    <div><textarea value={body} onChange={handleBodyChange} /></div>
                                    <button onClick={(evt) => handleUpdateClick(evt)}>Update</button>
                                    <button onClick={() => setUpdate(!update)}> Cancel</button>
                                </>
                            }
                        </>
                        :
                        "Namaste"
                    }
                </div>
            </section>
        </>
    );
}
