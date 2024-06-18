import { Router } from 'express';
import authUser from '../controllers/user/authUser.js';
import changeUserRole from '../controllers/user/changeUserRole.js';
import changeUserStatus from '../controllers/user/changeUserStatus.js';
import createUser from '../controllers/user/createUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import getUser from '../controllers/user/getUser.js';
import getUsers from '../controllers/user/getUsers.js';
import recoverPassword from '../controllers/user/recoverPassword.js';
import getUserData from '../controllers/user/getUserData.js';

const usersRouter = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/find/:id', getUser);
usersRouter.get('/profile', getUserData);
usersRouter.post('/login', authUser);
usersRouter.post('/signup', createUser);
usersRouter.put('/role/:id', changeUserRole);
usersRouter.put('/recover/:id', recoverPassword);
usersRouter.put('/status/:id', changeUserStatus);
usersRouter.delete('/delete/:id', deleteUser);

export default usersRouter;
