import {Router, Request, Response, response} from 'express';
import {UserController} from './controler/UserController';
import { CourseUnit } from './models/CourseUnit';


interface UserRequest {
    name: string;
    email: string;
    password: string;
}

const routes = Router();
const userController = new UserController();

routes.get('/user', (request, response) => response.json({
    message: 'ola mundo!'
}))

routes.post('/user', userController.create);
routes.post('/activy', () => console.log ('Activy route'));
routes.post('/courseunit', () => console.log ('Course Unit route'));

export default routes;