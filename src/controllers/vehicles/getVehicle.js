import Car from '../../modelos/vehicles.js';

export default async function getVehicle(req, res) {
  if (!req.params.id) {
    return res.status(400).error({ error: 'No id in params...' });
  }
  const { id } = req.params;

  try {
    const vehicle = await Car.findOne({ _id: id });

    return res.status(201).send(vehicle);
  } catch (error) {
    return res.status(400).error(error);
  }
}
