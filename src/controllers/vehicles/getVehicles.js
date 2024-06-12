import Car from '../../modelos/vehicles.js';

export default async function getVehicles(_req, res) {
  try {
    const vehicles = await Car.find();

    return res.status(201).send(vehicles);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}
