const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    country: String,
    location: String,
    followers: {
        count: String,
        growth: String
    },
    likes_average: String,
    comments_average: String,
    audience: {
        age_range: String,
        gender: String,
        location: String,
        language: String,
        interests: {
            title: [String, String, String],
            value: [String, String, String]
        }
    }
})

const User = mongoose.model('user', userSchema);

module.exports = User;