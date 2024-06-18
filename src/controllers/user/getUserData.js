import jwt from 'jsonwebtoken';
import Users from '../../modelos/users.js';

export default async function getUserData(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: 'No authorization header...' });

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Invalid authorization header...' });
  }

  let userToken;
  try {
    userToken = jwt.decode(token);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }

  try {
    const userData = await Users.findById(userToken.id);
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}
