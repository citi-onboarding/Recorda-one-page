import express from 'express';
import CarouselController from '@controllers/CarouselController';
import FooterController from '@controllers/FooterController';
import FeedbackController from '@controllers/FeedbackController';

const routes = express.Router();
const feedbackController = new FeedbackController();
const carouselController = new CarouselController();
const footerController = new FooterController();

routes.post('/feedback', feedbackController.create);
routes.get('/feedback', feedbackController.get);
routes.delete('/feedback/:id', feedbackController.delete);
routes.put('/feedback/:id', feedbackController.update);

routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);
routes.put('/carousel/:id', carouselController.update);

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);

export default routes;