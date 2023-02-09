import "./JournalEntry.css";
import { useState } from "react";
import * as journalAPI from "../../utilities/portal/journals-api";

export default function JournalEntry({ entry }) {
    const [update, setUpdate] = useState(false);

    const [subject, setSubject] = useState(entry ? entry.subject : "");
    const [body, setBody] = useState(entry ? entry.body : "");

    const handleSubjectChange = (evt) => {
        setSubject(evt.target.value);
    }
    const handleBodyChange = (evt) => {
        setBody(evt.target.value);
    };

    const handleUpdateClick = (evt) => {
        evt.preventDefault();

        const updatedEntry = {
            _id: entry._id,
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


    return (
        <>
        <section id="journal-entry">
            <div>
                {!update ?
                    <>
                        <div>{subject}</div>
                        <div>{entry ? entry.formattedDate : ""}</div>
                        <div>{body}</div>
                    </>
                    :
                    <>
                        <div><input type="text" value={subject} onChange={handleSubjectChange} /></div>
                        <div>{entry ? entry.formattedDate : ""}</div>
                        <div><textarea value={body} onChange={handleBodyChange} /></div>
                        <button onClick={handleUpdateClick}>Update</button>
                    </>
                }
            </div>
        </section>
        </>
    );
}
