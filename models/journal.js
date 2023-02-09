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
},{
    timestamps: true
});

entriesSchema.virtual('formattedDate').get(function(){
    return this.createdAt.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
});

module.exports = mongoose.model('Entries', entriesSchema);
