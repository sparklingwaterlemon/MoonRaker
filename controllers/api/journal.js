const Journal = require("../../models/journal");

module.exports = {
    addNew,
    index,
    update,
    destroy,
};

async function addNew(req,res){
    req.body.user = req.user._id;

    const newEntry = new Journal(req.body);
    await newEntry.save()

    // console.log("newEntry", newEntry);
}

async function index(req,res){
    const allEntries = await Journal.find({user: req.user._id});
    allEntries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(allEntries);
};


async function update(req,res){
    const updatedEntry = req.body;
    console.log("controller", req.body);
    try{
        const entry = await Journal.findByIdAndUpdate(updatedEntry._id, { 
            $set: { 
                subject: updatedEntry.subject, 
                body: updatedEntry.body }
            },
            { 
                new: true
            });
        return res.status(200).send(entry);
    } catch (err){
        return res.status(500).send(err);
    }
};

async function destroy(req, res) {
    try {
        const deletedEntry = await Journal.findByIdAndRemove(req.body._id);
        return res.status(200).send(deletedEntry);
    } catch (err) {
        return res.status(500).send(err);
    }
}