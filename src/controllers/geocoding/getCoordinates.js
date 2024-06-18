import 'dotenv/config';
import opencage from 'opencage-api-client';

const { geocode } = opencage;

const getCoordinates = async (req, res) => {
  try {
    if (!req.body.address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    const { address } = req.body;

    const data = await geocode({
      q: address,
      key: process.env.OPENCAGE_API_KEY,
    });

    if (data.status.code === 200 && data.results.length > 0) {
      const coordinates = data.results[0].geometry;
      return res.json(coordinates);
    }

    throw new Error('Address not found');
  } catch (error) {
    // console.error('Error fetching geocoding data:', error);
    return res.status(500).json({ error: 'Error fetching the geocoding data' });
  }
};

export default getCoordinates;

