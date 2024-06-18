import opencage from 'opencage-api-client';
import Paths from '../../modelos/paths.js';

const { geocode } = opencage;

export default async function createPath(req, res) {
  try {
    const { carrierDni, departure, notes, status } = req.body;
    let { stops } = req.body;

    stops = await Promise.all(
      stops.map(async (address) => {
        const coordinates = await geocode({
          q: address,
          key: process.env.OPENCAGE_API_KEY,
        });
        const { lat, lng } = coordinates.results[0].geometry;
        return `${lat}, ${lng}`;
      }),
    );

    const destination = stops.pop();

    const path = await Paths.create({
      notes,
      status,
      carrierDni,
      departure,
      destination,
      stops,
    });

    return res.status(201).json({ message: 'Ruta creada exitosamente', path });
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la ruta' });
  }
}
