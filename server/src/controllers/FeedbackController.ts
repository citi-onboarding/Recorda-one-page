import { Request, Response } from 'express';
import { Feedback } from '@models/Feedback';
import { Citi, Crud } from '../global'


export default class FeedbackController implements Crud{
    
    async create(request: Request, response: Response){
        const {ProfilePictureLink, PersonName, FeedbackText } = request.body;
        
        const isAnyUndefined = Citi.areValuesUndefined(ProfilePictureLink, PersonName, FeedbackText);
        if(isAnyUndefined) return response.status(400).send();

        const newFeedback = {ProfilePictureLink, PersonName, FeedbackText};
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





}