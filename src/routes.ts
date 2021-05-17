import {Router, Request, Response, response} from 'express';
import {UserController} from './controler/UserController';
import {ActivyController} from './controler/ActivyController';
import {CourseUnitController } from './controler/CourseUnitControler';
import { AuthenticateController } from './controler/AuthenticateController';
import autenticated from './middleware/Autenticated';

const userController = new UserController()
const activyController = new ActivyController()
const courseUnitController = new CourseUnitController()
const authenticateController = new AuthenticateController()

const routes = Router();

routes.post('/auth', authenticateController.create);

routes.get('/user', autenticated, userController.show);
routes.get('/activy', autenticated, activyController.show);
routes.get('/courseunit', autenticated, courseUnitController.show);

routes.post('/user', userController.create);
routes.post('/activy', autenticated, activyController.create);
routes.post('/courseunit', autenticated, courseUnitController.create);

export default routes;