const Journal = require("../../models/journal");

module.exports = {
    index,
    update
};


async function index(req,res){
    const allEntries = await Journal.find({})
    allEntries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(allEntries);
};


async function update(req,res){
    const updatedEntry = req.body;
    await Journal.findByIdAndUpdate(updatedEntry._id, { 
        $set: { 
            subject: updatedEntry.subject, 
            body: updatedEntry.body }
        },
        { 
            new: true
        },
        (err, entry) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(entry);
    });
};