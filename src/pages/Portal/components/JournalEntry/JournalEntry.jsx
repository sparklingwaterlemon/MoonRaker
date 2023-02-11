import "./JournalEntry.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../utilities/journals-api";

export default function JournalEntry({ allEntries, setAllEntries, activeEntry, setActiveEntry }) {
    const [update, setUpdate] = useState(false);
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");


    useEffect(() => {
        if (activeEntry) {
            setSubject(activeEntry.subject);
            setBody(activeEntry.body)
        }
    }, [activeEntry]);

    const handleSubjectChange = (evt) => {
        setSubject(evt.target.value);
    };
    const handleBodyChange = (evt) => {
        setBody(evt.target.value);
    };

    const handleUpdateClick = async (evt) => {
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
            await journalAPI.getAll().then(allEntries => {
                allEntries ? setAllEntries(allEntries) : setAllEntries([])
            });
        } catch (err) {
            throw new Error();
        }
        setUpdate(!update);
    };

    const handleDeleteClick = async (evt) => {
        try {
            await journalAPI.deleteEntry(activeEntry);
            const updatedEntries = await journalAPI.getAll();

            if (allEntries) {
                setAllEntries(updatedEntries);
                setActiveEntry(updatedEntries[0]);
            } else {
                setAllEntries([]);
                setActiveEntry();
            };

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
            {activeEntry ?
                <>
                    {!update ?
                        <section className="entry-solid">
                            <div className="e-s-container">
                                <div className="e-subject-date">
                                    <p>{activeEntry ? subject : ""} </p>
                                    <p>{activeEntry ? formattedDate(activeEntry.createdAt) : ""}</p>
                                </div>
                                <div className="e-body"> {body} </div>

                                <div id="e-btn-house">
                                    <button onClick={() => setUpdate(!update)}> Update </button>
                                </div>
                                <button id="e-btn-del" onClick={() => handleDeleteClick()}> Delete </button>
                            </div>
                        </section>

                        :

                        <section className="entry-solid">
                            <div className="e-s-container change">
                                <div className="e-subject-date change">
                                    <input
                                        type="text"
                                        value={subject}
                                        onChange={handleSubjectChange}
                                    />
                                </div>
                                <div className="e-body">
                                    <textarea
                                        value={body}
                                        onChange={handleBodyChange}
                                    />
                                </div>
                                <div>
                                    <button onClick={(evt) => {
                                        handleUpdateClick(evt)
                                        }}
                                        id="e-btn-house-updating"
                                    >
                                    Updating...
                                    </button>
                                    <button 
                                        id="e-btn-house-exit"
                                        onClick={() => setUpdate(!update)}> Exit Update</button>
                                </div>
                            </div>
                        </section>
                    }
                </>
                :
                <div id="no-entry-banner">
                    <h1>Namaste</h1>
                    <p>What thoughts are occupying your mind today?</p>
                </div>
            }
        </>
    );
}
