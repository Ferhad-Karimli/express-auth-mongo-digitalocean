const { signUpValidate, SignUpSchema } = require('../../models/user');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const { error } = signUpValidate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const exisitingUser = await SignUpSchema.findOne({ email });
    if (exisitingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('hashedPassword', hashedPassword);
    const newUser = new SignUpSchema({
      userName,
      email,
      password: hashedPassword,
    });
    console.log('newUser', newUser);

    await newUser.save();
    res
      .status(201)
      .json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
