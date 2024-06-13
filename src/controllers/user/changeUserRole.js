import Users from '../../modelos/users.js';

export default async function changeUserRole(req, res) {
  if (!req.params.id) {
    res.status(400).json({ error: 'No id in params...' });
  }
  const { id } = req.params;

  try {
    const user = await Users.findById(id);

    if (!user) {
      throw new Error('No user found...');
    }

    user.role = user.role === 'admin' ? 'carrier' : 'admin';
    await user.save();

    return res.status(200).json({ message: 'User role changed!' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
