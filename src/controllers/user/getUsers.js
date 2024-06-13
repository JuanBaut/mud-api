import Users from '../../modelos/users.js';

export default async function getUsers(_req, res) {
  try {
    const users = await Users.find({});

    return res.status(201).send(users);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
