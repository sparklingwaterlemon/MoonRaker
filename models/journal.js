const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    subject: {
        type: String,
    },
    body: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
});



module.exports = mongoose.model('Entries', entriesSchema);
