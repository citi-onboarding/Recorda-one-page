import express from 'express';
import FooterController from '@controllers/FooterController';
import FeedbackController from '@controllers/FeedbackController';

const routes = express.Router();
const feedbackController = new FeedbackController();

routes.post('/feedback', feedbackController.create);
routes.get('/feedback', feedbackController.get);
routes.delete('/feedback/:id', feedbackController.delete);
routes.put('/feedback/:id', feedbackController.update);

const footerController = new FooterController();

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);


export default routes;