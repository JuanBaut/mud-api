import Users from '../../modelos/users.js';

export default async function changeUserStatus(req, res) {
  if (!req.params.id) {
    return res.status(400).error({ error: 'No id in params...' });
  }

  const { id } = req.params;

  try {
    const user = await Users.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: 'User not found...' });
    }

    user.status = user.status === 'disabled' ? 'enabled' : 'disabled';
    await user.save();

    return res.status(200).json({ message: 'User status changed!' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
