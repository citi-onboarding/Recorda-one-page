import express from 'express';
import FeedbackController from '@controllers/FeedbackController';

const routes = express.Router();
const feedbackController = new FeedbackController();

routes.post('/feedback', feedbackController.create);
routes.get('/feedback', feedbackController.get);
routes.delete('/feedback/:id', feedbackController.delete);
routes.put('/feedback/:id', feedbackController.update);

export default routes;