const bcrypt = require('bcrypt');

const hashPassword = async(data) => {

    data.password = await bcrypt.hash(data.password, 10);
    
    return data;
}

module.exports = {
    hashPassword,
}