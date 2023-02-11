import "./NewEntry.css";
import * as journalAPI from "../../utilities/journals-api";


export default function NewEntry({
    newEntry, 
    setNewEntry, 
    setAllEntries,
    toggleToNewEntry,
    setToggleToNewEntry }){



    const handleNewEntrySubmit = (evt) => {
        evt.preventDefault();
        try{
            journalAPI.addEntry(newEntry);
            journalAPI.getAll().then(allEntries => {
                console.log("getting all entries 2");
                allEntries ? setAllEntries(allEntries) : setAllEntries([]);
            });
        } catch (err){
            throw new Error();
        }
        toggleBack();
    };

    const toggleBack =()=>{
        setToggleToNewEntry(!toggleToNewEntry);
    };

    const handlNewEntryFormChange = (evt) => {
        setNewEntry({ ...newEntry, [evt.target.name]: evt.target.value });
    };

    return (
        <>
            <section id="new-entry">
                <div className="n-e-banner">
                    <h1> Check In and Write Your Gratitudes</h1>
                </div>
                <div className="new-entry-container">
                    <form autoComplete="off" className="new-entry-form" onSubmit={handleNewEntrySubmit}>
                        <label>Subject</label>
                        <input id="subtext" type="text" name="subject" onChange={handlNewEntryFormChange} />
                        <label>Body</label>
                        <textarea id="bodytext" type="text" name="body" onChange={handlNewEntryFormChange} />
                    <button id="new-btn">New Entry</button>
                    </form>
                </div>
            </section>
        </>
    )
}