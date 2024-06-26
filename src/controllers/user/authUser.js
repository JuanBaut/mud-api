import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Users from '../../modelos/users.js';

export default async function authUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing fields...' });
  }

  let user;

  try {
    user = await Users.findOne({ email });
    if (!user) throw Error('Credenciales incorrectas...');

    const validatePass = await bcrypt.compare(password, user.password);

    if (!validatePass)
      return res.status(401).json({ error: 'Contraseña incorrecta...' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  let token;

  try {
    token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY,
      { expiresIn: '2d' },
    );
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({
    message: 'User logged in!',
    token,
  });
}
