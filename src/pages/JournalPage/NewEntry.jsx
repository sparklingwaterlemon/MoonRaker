import "./NewEntry.css";
import { useState } from "react";
import * as journalAPI from "../../utilities/portal/journals-api"

export default function NewEntry() {
    const [newEntry, setNewEntry] = useState({
        subject: "",
        body: "",
    });


    const handleNewEntrySubmit = async function (evt) {
        evt.preventDefault();
        journalAPI.addEntry(newEntry);
        // try{
        //     journalAPI.addEntry(newEntry);
        // } catch (err) {
        //     throw new Error();
        // }
    };


    const handlNewEntryFormChange = (evt) => {
        setNewEntry({ ...newEntry, [evt.target.name]: evt.target.value });
    };

    return (
        <>
            <section id="new-entry">
                <h1> How are you today?</h1>
                <div className="new-entry-container">
                    <form autoComplete="off" className="new-entry-form" onSubmit={handleNewEntrySubmit}>
                        <label>Subject</label>
                        <input id="subtext" type="text" name="subject" onChange={handlNewEntryFormChange} />
                        <label>Body</label>
                        <input id="bodytext" type="text" name="body" onChange={handlNewEntryFormChange} />
                    <button id="butt">New Entry</button>
                    </form>
                </div>
            </section>
        </>
    )
}