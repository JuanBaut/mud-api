import Rutas from '../../modelos/paths.js';

export default async function createPath(req, res) {
  try {
    const {
      idUsuarioCreador,
      origen,
      destino,
      puntosIntermedios,
      descripcion,
      estado,
    } = req.body;

    const newRuta = new Rutas({
      idUsuarioCreador,
      origen: {
        type: 'Address',
        address: origen,
      },
      destino: {
        type: 'Address',
        address: destino,
      },
      puntosIntermedios: puntosIntermedios
        ? puntosIntermedios.map((punto) => ({
            type: 'Address',
            address: punto,
          }))
        : [],
      descripcion,
      estado,
      idRepartidorAsignado: null,
    });

    const savedRuta = await newRuta.save();

    return res
      .status(201)
      .json({ message: 'Ruta creada exitosamente', ruta: savedRuta });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la ruta' });
  }
}
