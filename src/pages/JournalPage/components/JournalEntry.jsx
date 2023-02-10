import "./JournalEntry.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../../utilities/portal/journals-api";

export default function JournalEntry({ activeEntry }) {
    const [update, setUpdate] = useState(false);
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    useEffect(()=>{
        setSubject(activeEntry.subject);
        setBody(activeEntry.body)
    },[activeEntry]);

    
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

    useEffect(()=>{
        console.log("activeEntry");
    },[activeEntry])



    return (
        <>
        <section id="journal-entry">
            <div>
                {!update ?
                    <>
                        <div>{subject}</div>
                        <div>{activeEntry ? activeEntry.formattedDate : ""}</div>
                        <div>{body}</div>
                        <button onClick={()=>setUpdate(!update)}> Update</button>
                    </>
                    :
                    <>
                        <div><input type="text" value={subject} onChange={handleSubjectChange} /></div>
                        <div>{activeEntry ? activeEntry.formattedDate : ""}</div>
                        <div><textarea value={body} onChange={handleBodyChange} /></div>
                        <button onClick={handleUpdateClick}>Update</button>
                        <button onClick={()=>setUpdate(!update)}> Cancel</button>
                    </>
                }
            </div>
        </section>
        </>
    );
}
