import { hash } from 'bcrypt';
import Users from '../../modelos/users.js';
import sendEmail from '../../utils/emails.js';

export default async function createUser(req, res) {
  const { nombre, email, contrasena, codContrasena, datosDeContacto } =
    req.body;

  try {
    let rol = req.session.adminRole;

    if (!rol) {
      rol = 'repartidor';
    }

    if (!(nombre || email || contrasena)) {
      throw Error('Se requiere mas data');
    }

    const userExistEmail = await Users.findOne({ email });
    if (userExistEmail) throw Error('Ya existe un usuario con este mail');
    const passwordHash = await hash(contrasena, 8);
    const user = await Users.create({
      nombre,
      email,
      contrasena: passwordHash,
      codContrasena: codContrasena || null,
      datosDeContacto: datosDeContacto || {
        telefono: null,
        direccion: null,
      },
    });
    sendEmail(email, user.id);

    return res.status(201).json({ message: 'Usario creado con exito' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
