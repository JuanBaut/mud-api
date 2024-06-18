import Paths from '../../modelos/paths.js';

export default async function getPath(req, res) {
  const { id } = req.params;
  try {
    const path = await Paths.findById(id);
    return res.status(200).json(path);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las rutas' });
  }
}
