import express from 'express';
import CarouselController from '@controllers/CarouselController';

const routes = express.Router();
const carouselController = new CarouselController();

routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);
routes.put('/carousel/:id', carouselController.update);

export default routes;