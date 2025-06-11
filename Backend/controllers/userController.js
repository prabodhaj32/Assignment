import User from '../models/User.js';

// Register
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ msg: 'User Registered' });
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

// Login
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });
    if (!user)
      return res.status(400).json({ error: 'Invalid credentials' });

    res.status(200).json({ msg: 'Login successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};
