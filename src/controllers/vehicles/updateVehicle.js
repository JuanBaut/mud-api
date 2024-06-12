import Car from '../../modelos/vehicles.js';

const updateVehicle = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).error({ error: 'No id in params...' });
  }
  const { id } = req.params;

  if (!req.body) {
    return res.status(400).error({ error: 'No body was received...' });
  }
  const updateData = req.body;

  try {
    const vehicle = await Car.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });

    if (!vehicle) {
      return res.status(404).json({ message: 'El vehículo no fue encontrado' });
    }

    return res
      .status(200)
      .json({ message: 'Vehículo actualizado correctamente', vehicle });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default updateVehicle;
