import { hash } from 'bcrypt';
import Users from '../../modelos/users.js';

export default async function createUser(req, res) {
  const { name, lastname, dni, email, phone, password } = req.body;

  if (!name || !lastname || !dni || !email || !phone || !password) {
    return res.status(400).json({ error: 'Missing fields...' });
  }

  try {
    const existingDni = await Users.findOne({ dni });
    if (existingDni) throw Error('Existe una cuenta con este DNI...');

    const existingEmail = await Users.findOne({ email });
    if (existingEmail) throw Error('Existe una cuenta con este correo...');

    if (!password) throw Error('Password is required...');
    const passwordHash = await hash(password, 8);

    await Users.create({
      name,
      lastname,
      dni,
      email,
      phone,
      password: passwordHash,
    });

    return res.status(201).json({ message: 'User created!' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
