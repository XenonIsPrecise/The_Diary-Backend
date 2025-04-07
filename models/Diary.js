const mongoose = require('mongoose');

const DiarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    slug: String, // URL-friendly version of the title
    description: {
        type: String,
        required: [true, 'Please add some content'],
        maxlength: [2000, 'Description cannot be more than 2000 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    mood: {
        type: String,
        enum: ['happy', 'sad', 'angry', 'neutral', 'excited', 'tired'],
        default: 'neutral'
    },
    isPrivate: {
        type: Boolean,
        default: true // Private by default, unless marked public
    },
    // author: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User', // Reference to the User model
    //     required: true
    // },
    isFavorited: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Diary', DiarySchema);