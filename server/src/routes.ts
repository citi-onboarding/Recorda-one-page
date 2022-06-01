import express from 'express';
import CarouselController from '@controllers/CarouselController';
import FooterController from '@controllers/FooterController';
import FeedbackController from '@controllers/FeedbackController';
import FirstSectionController from '@controllers/FirstSectionController';
import NewsController from '@controllers/NewsController';

const routes = express.Router();

const feedbackController = new FeedbackController();
const carouselController = new CarouselController();
const footerController = new FooterController();
const firstSectionController = new FirstSectionController();
const newsController = new NewsController();

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

routes.post('/firstsection', firstSectionController.create);
routes.get('/firstsection', firstSectionController.get);
routes.delete('/firstsection/:id', firstSectionController.delete);
routes.put('/firstsection/:id', firstSectionController.update);

routes.post('/news', newsController.create);
routes.get('/news', newsController.get);
routes.delete('/news/:id', newsController.delete);
routes.put('/news/:id', newsController.update);

export default routes;