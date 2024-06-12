import { v4 as uuidv4 } from 'uuid';
import Users from '../../modelos/users.js';

// nada de manejo de errores
export default async function recoverPassword(req, res) {
  if (!req.params.id) {
    return res.status(400).error({ error: 'No id in params' });
  }

  const { id } = req.params;
  const user = await Users.findOne({ _id: id });

  user.cod_contrasena = uuidv4();
  await user.save();

  return res.status(200).json({ message: 'Clave generada' });
}
