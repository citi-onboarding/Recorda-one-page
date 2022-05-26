import express from 'express';
import FooterController from '@controllers/FooterController';

const routes = express.Router();
const footerController = new FooterController();

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);

export default routes;