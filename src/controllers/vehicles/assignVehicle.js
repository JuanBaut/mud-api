import { Types } from 'mongoose';
import Users from '../../modelos/users.js';
import Car from '../../modelos/vehicles.js';

export default async function assignVehicle(req, res) {
  try {
    const { _id, repartidorId } = req.body;

    if (!Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: 'ID de vehiculo inválido' });
    }

    if (!Types.ObjectId.isValid(repartidorId)) {
      return res.status(400).json({ message: 'ID de repartidor inválido' });
    }

    const vehicle = await Car.findById(_id);
    if (!vehicle) {
      return res.status(404).json({ message: 'vehiculo no encontrada' });
    }

    const repartidor = await Users.findById(repartidorId);
    if (!repartidor) {
      return res.status(404).json({ message: 'Repartidor no encontrado' });
    }

    vehicle.id_repartidor_asignado = repartidorId;
    const updatedVehicle = await vehicle.save();

    // Emitir evento con la información de la vehiculo y el repartidor
    // io.emit("Vehiculo Asignado", {
    //   vehicle: updatedVehicle,
    //   repartidor: repartidor,
    // });

    return res.status(200).json({
      message: 'Repartidor asignado exitosamente',
      vehicle: updatedVehicle,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error al asignar el repartidor' });
  }
}
