import express from 'express';
import CarouselController from '@controllers/CarouselController';
import FooterController from '@controllers/FooterController';

const routes = express.Router();
const carouselController = new CarouselController();
const footerController = new FooterController();

routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);
routes.put('/carousel/:id', carouselController.update);

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);

export default routes;