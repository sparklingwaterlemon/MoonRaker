import "./JournalEntry.css";
import { useState, useEffect } from "react";
import * as journalAPI from "../../../utilities/portal/journals-api";

export default function JournalEntry({ selectedEntry }) {
    const [update, setUpdate] = useState(false);
    const [subject, setSubject] = useState(selectedEntry ? selectedEntry.subject : "");
    const [body, setBody] = useState(selectedEntry ? selectedEntry.body : "");



    
    const handleSubjectChange = (evt) => {
        setSubject(evt.target.value);
    }
    const handleBodyChange = (evt) => {
        setBody(evt.target.value);
    };

    const handleUpdateClick = (evt) => {
        evt.preventDefault();

        const updatedEntry = {
            _id: selectedEntry._id,
            subject,
            body,
        };
        try {
            journalAPI.update(updatedEntry).then((entry) => {
                setSubject(entry.subject);
                setBody(entry.body);
                setUpdate(!update);
            });
        } catch (err) {
            throw new Error();
        }
    };

    // useEffect(()=>{
    //     console.log(selectedEntry);
    //     setSubject(selectedEntry.subject);
    //     setBody(selectedEntry.body);
    // },[selectedEntry])



    return (
        <>
        <section id="journal-entry">
            <div>
                {!update ?
                    <>
                        <div>{subject}</div>
                        <div>{selectedEntry ? selectedEntry.formattedDate : ""}</div>
                        <div>{body}</div>
                        <button onClick={()=>setUpdate(!update)}> Update</button>
                    </>
                    :
                    <>
                        <div><input type="text" value={subject} onChange={handleSubjectChange} /></div>
                        <div>{selectedEntry ? selectedEntry.formattedDate : ""}</div>
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
