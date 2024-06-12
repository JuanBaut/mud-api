import { Router } from 'express';
import pathRouter from './paths.js';
import usersRouter from './users.js';
import vehicleRouter from './vehicles.js';

const router = Router();

router.use('/vehicles', vehicleRouter);
router.use('/users', usersRouter);
router.use('/paths', pathRouter);

export default router;
