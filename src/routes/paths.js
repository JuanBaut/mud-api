import { Router } from 'express';
import getCoordinates from '../controllers/geocoding/getCoordinates.js';
import assignCarrier from '../controllers/paths/assignCarrier.js';
import createPath from '../controllers/paths/createPath.js';
import deletePath from '../controllers/paths/deletePath.js';
import getPaths from '../controllers/paths/getPaths.js';

const pathRouter = Router();

pathRouter.post('/geo', getCoordinates);
pathRouter.post('/carrier', assignCarrier);
pathRouter.post('/create', createPath);
pathRouter.get('/getall', getPaths);
pathRouter.delete('/delete/:rutaId', deletePath);

export default pathRouter;
