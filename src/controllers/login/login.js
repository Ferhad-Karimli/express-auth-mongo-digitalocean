const { SignUpSchema } = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    console.log('trye girmedi');
    const { email, password} = req.body;

    const user = await SignUpSchema.findOne({ email });
  console.log(user, 'login user');
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    console.log('password',password);
    console.log(user.password,'user password');
    const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log(isPasswordValid, 'isPasswordValid');
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, email, email: user.email },
      'SECRET_KEY', // bunu .env-ə salmaq lazımdır!
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
