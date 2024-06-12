import { Router } from 'express';
import authUser from '../controllers/user/authUser.js';
import changeUserRole from '../controllers/user/changeUserRole.js';
import changeUserStatus from '../controllers/user/changeUserStatus.js';
import createUser from '../controllers/user/createUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import getUser from '../controllers/user/getUser.js';
import getUsers from '../controllers/user/getUsers.js';
import recoverPassword from '../controllers/user/recoverPassword.js';

const usersRouter = Router();

usersRouter.post('/login', authUser);
usersRouter.post('/create', createUser);
usersRouter.get('/:id', getUser);
usersRouter.get('/all', getUsers);
usersRouter.put('/rol/:id', changeUserRole);
usersRouter.put('/recover/:id', recoverPassword);
usersRouter.put('/activate/:id', changeUserStatus);
usersRouter.delete('/delet/:id', deleteUser);

export default usersRouter;
