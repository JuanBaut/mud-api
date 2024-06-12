import Users from '../../modelos/users.js';

export default async function changeUserRole(req, res) {
  const { id } = req.params;

  try {
    const user = await Users.findById(id);

    if (!user) {
      throw new Error('No se encontro el usuario');
    }

    user.rol = user.rol === 'administrador' ? 'repartidor' : 'administrador';
    await user.save();

    return res.status(200).json({ message: 'Rol del usuario modificado' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
