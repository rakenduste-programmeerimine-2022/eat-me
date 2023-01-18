const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);
module.exports = User

// export default mongoose.model('User', UserSchema);