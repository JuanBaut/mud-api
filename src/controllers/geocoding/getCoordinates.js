import 'dotenv/config';
import opencage from 'opencage-api-client';

const { geocode } = opencage;

const getCoordinates = async (req, res) => {
  if (!req.body.address) {
    res.status(400).json({ error: 'Body vacio' });
  }
  const { address } = req.body;

  try {
    const data = await geocode({
      q: address,
      key: process.env.OPENCAGE_API_KEY,
    });
    if (data.status.code === 200 && data.results.length > 0) {
      const coordinates = data.results[0].geometry;
      res.json(coordinates);
    } else {
      throw new Error('Address not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the geocoding data' });
  }
};

export default getCoordinates;
