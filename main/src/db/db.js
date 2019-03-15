const mongoose = require('mongoose');
const User = require('./models/user.model');
mongoose.connect(`mongodb://michael:Javascript*2017@ds127545.mlab.com:27545/search-users`, {useNewUrlParser: true}, (err) => {if(err) throw new Error(err);})

const getUsers = async () => {
    const users = await User.find({});
    return users;
}

module.exports = {
    getUsers: getUsers
};