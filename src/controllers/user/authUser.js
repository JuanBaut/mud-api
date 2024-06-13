import bcrypt from 'bcrypt';
import Users from '../../modelos/users.js';

export default async function authUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields...' });
  }

  try {
    const findUser = await Users.findOne({ email });
    if (!findUser) throw Error('User with that email not found...');

    const validatePass = await bcrypt.compare(password, findUser.password);

    if (!validatePass)
      return res.status(201).json({ message: 'Wrong password...' });

    return res.status(201).json({ message: 'User logged in!' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
