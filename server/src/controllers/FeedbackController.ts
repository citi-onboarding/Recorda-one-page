import { Request, Response } from 'express';
import { Feedback } from '@models/Feedback';
import { Citi, Crud } from '../global'

export default class FeedbackController implements Crud{
    
    async create(request: Request, response: Response){
        const { personName, feedbackText } = request.body;
        
        const isAnyUndefined = Citi.areValuesUndefined(personName, feedbackText);
        if(isAnyUndefined) return response.status(400).send();

        const newFeedback = {personName, feedbackText};
        const {httpStatus, message} = await Citi.insertIntoDatabase(Feedback, newFeedback);

        return response.status(httpStatus).send({message});
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Feedback);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: feedbackFound, message} = await Citi.findByID(Feedback, id);

        if(!feedbackFound) return response.status(400).send({message});

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(Feedback, feedbackFound);
        return response.status(httpStatus).send({messageFromDelete});
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {personName, feedbackText} = request.body;

        const isAnyUndefined = await Citi.areValuesUndefined(personName, feedbackText, id);
        if(isAnyUndefined) return response.status(400).send();

        const feedbackWithUpdates = {personName, feedbackText};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(Feedback, id, feedbackWithUpdates);
        return response.status(httpStatus).send({messageFromUpdate});
    }
}