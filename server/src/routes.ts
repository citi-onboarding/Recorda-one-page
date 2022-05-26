import express from 'express';
import UserController from '@controllers/UserController'
import FeedbackController from '@controllers/FeedbackController';

const routes = express.Router();
const userController = new UserController();
const feedbackController = new FeedbackController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/feedback', feedbackController.create);


export default routes;