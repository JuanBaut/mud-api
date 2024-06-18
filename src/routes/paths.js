import { Router } from 'express';
import getCoordinates from '../controllers/geocoding/getCoordinates.js';
import assignCarrier from '../controllers/paths/assignCarrier.js';
import createPath from '../controllers/paths/createPath.js';
import deletePath from '../controllers/paths/deletePath.js';
import getPaths from '../controllers/paths/getPaths.js';
import getPath from '../controllers/paths/getPath.js';

const pathRouter = Router();

pathRouter.get('/id/:id', getPath);
pathRouter.get('/all', getPaths);
pathRouter.post('/geo', getCoordinates);
pathRouter.post('/carrier', assignCarrier);
pathRouter.post('/create', createPath);
pathRouter.delete('/delete/:rutaId', deletePath);

export default pathRouter;
