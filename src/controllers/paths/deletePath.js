import Paths from '../../modelos/paths.js';

export default async function deletePath(req, res) {
  try {
    const { rutaId } = req.params;

    const deletedRuta = await Paths.findByIdAndDelete(rutaId);

    if (!deletedRuta) {
      return res.status(404).json({ message: 'Ruta no encontrada' });
    }

    return res
      .status(200)
      .json({ message: 'Ruta eliminada exitosamente', deletedRuta });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la ruta' });
  }
}
