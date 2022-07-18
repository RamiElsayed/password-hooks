const User = require('../../models/User');
const { getPayloadWithValidFieldsOnly } = require("../../helpers");

const loginUser = async(req, res) => {
  res.json("loginUser");
};
const signupUser = (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly([
        "email",
        "password",
        "Username",
      ], req.body);
    
      if (Object.keys(payload).length !== 3) {
        return res.status(400).json({ message: 'Please provide required fields'})
      }
    
      await User.create(payload);
      
      return res.json(User);
  } catch ({ message = " Something went wrong " }) {
    return res.status(500).json({ message });
  }
};


const resetPassword = (req, res) => {
  res.json("resetPassword");
};

module.exports = {
  loginUser,
  signupUser,
  resetPassword,
};
