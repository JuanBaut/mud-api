import Car from '../../modelos/vehicles.js';

const createVehicle = async (req, res) => {
  try {
    const {
      marca,
      modelo,
      placa,
      tipo,
      capacidad,
      estado,
      ubicacionActual,
      fechaMantenimiento,
    } = req.body;
    if (
      !(
        marca ||
        modelo ||
        placa ||
        tipo ||
        capacidad ||
        estado ||
        ubicacionActual ||
        fechaMantenimiento
      )
    )
      throw Error('Falta informacion necesaria');

    const vehicleLicensePlate = await Car.findOne({ placa });
    if (vehicleLicensePlate)
      throw Error('Existe un vehiculo con esa patente asignada');

    await Car.create({
      marca,
      modelo,
      placa,
      tipo,
      capacidad,
      estado,
      ubicacionActual,
      fechaMantenimiento,
    });

    return res.status(201).json({ message: 'Vehiculo creado con exito' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default createVehicle;
