import { compare } from 'bcrypt';
import Users from '../../modelos/users.js';

export default async function authUser(req, res) {
  const { email, contrasena } = req.body;
  try {
    const findUser = await Users.findOne({ email });
    if (!findUser) throw Error('No se encuentra usuario');

    const validatePass = await compare(contrasena, findUser.contrasena);
    if (!validatePass) throw Error('contrseña invalida');

    return res.status(201).json({ message: 'Login confirmado' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
