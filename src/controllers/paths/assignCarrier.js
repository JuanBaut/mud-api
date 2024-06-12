import { Types } from 'mongoose';
import { Socket } from 'socket.io';
import Paths from '../../modelos/paths.js';
import Users from '../../modelos/users.js';

export default async function assignCarrier(req, res) {
  try {
    const { rutaId, repartidorId } = req.body;

    if (!Types.ObjectId.isValid(rutaId)) {
      return res.status(400).json({ message: 'ID de ruta inválido' });
    }

    if (!Types.ObjectId.isValid(repartidorId)) {
      return res.status(400).json({ message: 'ID de repartidor inválido' });
    }

    const ruta = await Paths.findById(rutaId);
    if (!ruta) {
      return res.status(404).json({ message: 'Ruta no encontrada' });
    }

    const repartidor = await Users.findById(repartidorId);
    if (!repartidor) {
      return res.status(404).json({ message: 'Repartidor no encontrado' });
    }

    if (repartidor.rol !== 'repartidor') {
      return res
        .status(400)
        .json({ message: 'El usuario no tiene el rol de repartidor' });
    }

    ruta.id_repartidor_asignado = repartidorId;
    const updatedRuta = await ruta.save();

    // Emitir evento con la información de la ruta y el repartidor
    Socket.emit('rutaAsignada', { ruta: updatedRuta, repartidor });

    return res
      .status(200)
      .json({ message: 'Repartidor asignado exitosamente', ruta: updatedRuta });
  } catch (error) {
    return res.status(500).json({ message: 'Error al asignar el repartidor' });
  }
}
