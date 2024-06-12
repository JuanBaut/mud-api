import Paths from '../../modelos/paths.js';

export default async function getPaths(_req, res) {
  try {
    const rutas = await Paths.find();

    return res.status(200).json(rutas);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las rutas' });
  }
}
