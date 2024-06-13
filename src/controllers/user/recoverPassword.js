import { v4 as uuidv4 } from 'uuid';
import Users from '../../modelos/users.js';

export default async function recoverPassword(req, res) {
  if (!req.params.id) {
    return res.status(400).error({ error: 'No id in params... \n' });
  }

  const { id } = req.params;
  const user = await Users.findOne({ _id: id });
  user.password_code = uuidv4();
  await user.save();

  return res.status(200).json({ message: 'New password generated.' });
}
