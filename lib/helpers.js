const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash)
    return hash;
};

helpers.matchPass = async(password, passwordhash) => {
    try {

        const valid = await bcrypt.compare(password, passwordhash)
        console.log(valid + ' ' + " equivocado")
        return valid

    } catch (error) {
        console.log(error);
    }
};



module.exports = helpers;