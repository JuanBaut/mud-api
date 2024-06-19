import Car from '../../modelos/vehicles.js';

const createVehicle = async (req, res) => {
  try {
    const {
      make,
      model,
      plate,
      type,
      capacity,
      status,
      current_location,
      maintenance_date,
    } = req.body;

    if (
      !make ||
      !model ||
      !plate ||
      !type ||
      !capacity ||
      !status ||
      !current_location ||
      !maintenance_date
    ) {
      throw Error('Falta informacion necesaria');
    }

    const vehicleLicensePlate = await Car.findOne({ plate });
    if (vehicleLicensePlate)
      throw Error('Existe un vehiculo con esa patente asignada');

    await Car.create({
      make,
      model,
      plate,
      type,
      capacity,
      status,
      current_location,
      maintenance_date,
    });

    return res.status(201).json({ message: 'Vehiculo creado con exito' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createVehicle;
