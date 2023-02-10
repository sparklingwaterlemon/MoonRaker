import "./NewEntry.css";
import * as journalAPI from "../../../utilities/portal/journals-api"


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