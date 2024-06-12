import { Router } from 'express';
import assignVehicle from '../controllers/vehicles/assignVehicle.js';
import createVehicle from '../controllers/vehicles/createVehicle.js';
import deleteVehicle from '../controllers/vehicles/deleteVehicle.js';
import getVehicle from '../controllers/vehicles/getVehicle.js';
import getVehicles from '../controllers/vehicles/getVehicles.js';
import updateVehicle from '../controllers/vehicles/updateVehicle.js';

const vehicleRouter = Router();

vehicleRouter.get('/', getVehicles);
vehicleRouter.get('/:id', getVehicle);
vehicleRouter.post('/create', createVehicle);
vehicleRouter.post('/asignar', assignVehicle);
vehicleRouter.put('/update/:id', updateVehicle);
vehicleRouter.delete('/delete/:id', deleteVehicle);

export default vehicleRouter;
