import { hash } from 'bcrypt';
import Users from '../../modelos/users.js';
import sendEmail from '../../utils/emails.js';

export default async function createUser(req, res) {
  const { name, lastname, dni, email, phone, password } = req.body;

  if (!name || !lastname || !dni || !email || !phone || !password) {
    return res.status(400).json({ error: 'Missing fields...' });
  }

  try {
    const existingEmail = await Users.findOne({ email });
    if (existingEmail) throw Error('User with this email already exists...');

    if (!password) throw Error('Password is required...');
    const passwordHash = await hash(password, 8);

    const user = await Users.create({
      name,
      lastname,
      dni,
      email,
      phone,
      password: passwordHash,
    });

    sendEmail(email, user.id);

    return res.status(201).json({ message: 'User created!' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
