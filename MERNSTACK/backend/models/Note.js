const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


// Our Schema for notes
const noteSchema = new mongoose.Schema(
    // Object of schema
    {
        // Owner of Note.  
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    // Options of schema 
    {
        timestamps: true
    }
);

// apply the plugin for the schema
noteSchema.plugin(AutoIncrement,
    {
        inc_field: 'ticket',
        id: 'ticketNums',
        start_seq: 500
    }
);

// Export this schema withe the name 'Note'.
module.exports = mongoose.model('Note', noteSchema)