import Users from '../../modelos/users.js';

export default async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'El Usario no se encontró' });
    }

    await Users.deleteOne({ _id: id });

    return res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
