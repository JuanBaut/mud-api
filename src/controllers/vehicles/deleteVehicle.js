import Car from '../../modelos/vehicles.js';

export default async function deleteVehicle(req, res) {
  if (!req.params.id) {
    return res.status(400).error({ error: 'No id in params...' });
  }
  const { id } = req.params;

  try {
    const vehicle = await Car.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: 'El vehículo no se encontró' });
    }

    await Car.deleteOne({ _id: id });

    return res
      .status(200)
      .json({ message: 'Vehículo eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
